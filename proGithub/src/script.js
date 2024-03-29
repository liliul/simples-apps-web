import './style/cors.js';

import { FetchApi } from './service/fetchApi.js';
import { User } from './hook/githubUser.js';
import { Repos } from './hook/githubRepos.js';

import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';


/**
 * @description ### funções que retorna template html
 */

Header()
Main()
Footer()

/**
 * @funtion user
 * @returns informações da api github usuario e renderiza no html
 */

async function user() {
    const data = await FetchApi.apiGithubUser();
    console.log('use', data)
    User(data)
}

user()

/**
 * @function repos
 * @returns informações da api github repositorios e renderiza no html
 */

async function repos() {
    const grepos = await FetchApi.apiGithubRepos();
    console.log('repos', grepos)
    Repos(grepos)
}

repos()
