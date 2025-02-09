import { api } from './env.js'

const headers = {
    'Authorization': `Bearer ${api.GITHUB_KEY}`,
    'Accept': 'application/vnd.github.v3+json'
};

const user = "liliul"

async function getApiGithub(url, headers) {
    const req = await fetch(`${url}/${user}`, { headers })
    const res = await req.json()

    return res;
    
}

// getApiGithub(api.URL_GITHUB, headers)


async function userInfos() {
    const getGithubUser = await getApiGithub(api.URL_GITHUB, headers)
    console.log(getGithubUser);
        
    const div = document.createElement('div')

    div.innerHTML = `
        <h1>${getGithubUser.name}</h1>
        <span>${getGithubUser.login}</span>
        <span>${getGithubUser.location}</span>
    `

    document.getElementById('root').appendChild(div)
        
}

userInfos()
