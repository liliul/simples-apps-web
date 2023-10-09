import { FetchApi } from './service/fetchApi.js';
import { User } from './hook/githubUser.js';
import { Repos } from './hook/githubRepos.js';

import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';

Header()
Main()
Footer()


async function user() {
    const data = await FetchApi.apiGithubUser();
    console.log('use',data)
    User(data)
}

user()

async function repos() {
    const grepos = await FetchApi.apiGithubRepos();
    console.log('repos', grepos)
    Repos(grepos)
}

repos()
