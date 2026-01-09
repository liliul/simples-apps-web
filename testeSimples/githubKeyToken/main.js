import { api } from './env.js'

const headers = {
    'Authorization': `Bearer ${api.GITHUB_KEY}`,
    'Accept': 'application/vnd.github.v3+json'
}

const user = "liliul"

async function getApiGithub(url, headers) {
    try {
        const req = await fetch(`${url}/${user}`, { headers })
        if (!req.ok) {
            return { error: true, status: req.status }
        }

        const res = await req.json()

        return res;
    } catch (error) {
        console.error(error);
    }
    
}

function renderizarHTML(api) {
     try {
        const div = document.createElement('div')

        div.innerHTML = `
            <h1>${api.name}</h1>
            <span>${api.login}</span>
            <span>${api.location}</span>
        `

        document.getElementById('root').appendChild(div)
        
   } catch (error) {
        console.error(error);   
   }
}

async function userInfos(api) {
   try {
        // const getGithubUser = await getApiGithub(api.URL_GITHUB, headers)
        // console.log(getGithubUser);
        
        if (api.error && api.status === 401) {
            multiplicaRequestGithub()
            return
        }

        renderizarHTML(api)
        
   } catch (error) {
        console.error(error);   
   }
}

function multiplicaRequestGithub() {
    const userUrl = `${api.URL_GITHUB}/${user}`
    const reposUrl = `${api.URL_GITHUB}/${user}/repos`
    const contenteUrl = `https://api.github.com/repos/liliul/AngularTourOfHeroes/contents/`
    const contentReadme = `https://api.github.com/repos/liliul/AngularTourOfHeroes/contents/README.md`

    const ulrsPromiseAll = [
        fetch(userUrl),
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
            if (!data) return

            renderizarHTML(data[0])
            
        })
        .catch((erro) => console.error(erro))
}

async function INIT() {

    const getApiGithubApi = await getApiGithub(api.URL_GITHUB, headers)
    
    userInfos(getApiGithubApi)
    
}

INIT()