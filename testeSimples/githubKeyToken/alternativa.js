import { api } from './env.js'

async function fetchWithRetry(url, options = {}, config = {}) {
    const {
        retries = 3,
        retryDelay = 1000,
        fallback = null
    } = config;

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            // Fallback (ex: 401)
            if (fallback && fallback.condition(response)) {
                return fallback.action();
            }

            throw response;
        }

        return await response.json();
    } catch (error) {
        if (retries > 0) {
            await new Promise(res => setTimeout(res, retryDelay));
            return fetchWithRetry(url, options, {
                ...config,
                retries: retries - 1
            });
        }

        throw error;
    }
}

function githubAuthFallback(url) {
    return {
        condition: (response) => response.status === 401,
        action: () => {
            console.warn('Token inválido. Tentando acesso público...');
            return fetchWithRetry(url, {}, { retries: 1 });
        }
    };
}

function githubFetch(url) {
    return fetchWithRetry(
        url,
        {
            headers: {
                'Authorization': `Bearer ${api.GITHUB_KEY}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        },
        {
            retries: 2,
            retryDelay: 1500,
            fallback: githubAuthFallback(url)
        }
    );
}

async function getGithubUser(user) {
    return githubFetch(`https://api.github.com/users/${user}`);
}

try {
    const userData = await getGithubUser('liliul');

    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${userData.name}</h1>
        <span>${userData.login}</span>
        <span>${userData.location}</span>
    `;

    document.getElementById('root').appendChild(div);
} catch (error) {
    console.error('Erro final ao buscar dados:', error);
}

function githubRateLimitFallback(url) {
    return {
        condition: (response) =>
            response.status === 403 || response.status === 429,
        action: async () => {
            console.warn('Rate limit atingido. Aguardando...');
            await new Promise(r => setTimeout(r, 5000));
            return fetchWithRetry(url, {}, { retries: 1 });
        }
    };
}
