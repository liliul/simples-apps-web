import { FetchApi } from './service/fetchApi.js';
import { User } from './hook/githubUser.js';
import { Repos } from './hook/githubRepos.js';

import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';


/**
 * @description ### funções que retorna template html
 * @param {string} Header
 * @param {string} Main
 * @param {string} Footer
 * @return template html
 */

Header()
Main()
Footer()


async function user() {
    const data = await FetchApi.apiGithubUser();
    console.log('use',data)
    User(data)
}

/**
 * @funtion user
 * @return informações da api github usuario e renderiza no html
 */

user()

async function repos() {
    const grepos = await FetchApi.apiGithubRepos();
    console.log('repos', grepos)
    Repos(grepos)
}

/**
 * @function repos
 * @return informações da api github repositorios e renderiza no html
 */

repos()
