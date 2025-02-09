import { api } from './env.js'

const headers = {
    'Authorization': `Bearer ${api.GITHUB_KEY}`,
    'Accept': 'application/vnd.github.v3+json'
};

const user = "liliul"

async function getApiGithub(url, headers) {
    const req = await fetch(`${url}/${user}`, { headers })
    const res = await req.json()

    console.log(res);
    
}

getApiGithub(api.URL_GITHUB, headers)


// criar env.js
// const GITHUB_KEY=""
// const URL_GITHUB="https://api.github.com/users"

// export const api = {
//     GITHUB_KEY,
//     URL_GITHUB
// }