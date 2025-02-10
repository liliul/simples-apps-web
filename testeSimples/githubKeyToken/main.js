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

const reposUrl = `${api.URL_GITHUB}/${user}/repos`
const contenteUrl = `https://api.github.com/repos/liliul/AngularTourOfHeroes/contents/`
const contentReadme = `https://api.github.com/repos/liliul/AngularTourOfHeroes/contents/README.md`

const ulrsPromiseAll = [
    fetch(reposUrl, headers),
    fetch(contenteUrl, headers),
    fetch(contentReadme, headers)
]

Promise.all(ulrsPromiseAll)
    .then((res) => {
        return Promise.all(res.map(response => response.json()))
    })
    .then((data) => {
        console.log(data);
        
    })
    .catch((erro) => console.error(erro))