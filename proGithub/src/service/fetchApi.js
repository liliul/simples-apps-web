import { URL } from './url.js';
import { userConfig } from '../config/config.js';

const urlUser = `${URL.URL_GITHUB_API}${userConfig.githubUser}`;

async function apiGithubUser() {
	const req = await fetch(urlUser);
	return await req.json();
}

async function apiGithubRepos() {
	const req = await fetch(`${urlUser}/repos`);

	return await req.json();
}

export const FetchApi = {
	apiGithubUser,
	apiGithubRepos
}