import { URL } from './url.js';
import { userConfig } from '../config/config.js';

const urlUser = `${URL.URL_GITHUB_API}${userConfig.githubUser}`;

async function apiGithubUser() {
	const req = await fetch(urlUser);
	const { 
		name,
	 	avatar_url,
	 	html_url, 
	 	bio, 
	 	blog, 
	 	location, 
	 	company,
	 	twitter_username,
	 	followers,
	 	following,
	 	public_repos,
	 	public_gists
	} = await req.json();

	return { 
		name, 
		avatar_url, 
		html_url, 
		bio, 
		blog, 
		location, 
		company,
		twitter_username,
		followers,
		following,
		public_repos,
		public_gists
	}
}

async function apiGithubRepos() {
	const req = await fetch(`${urlUser}/repos`);
	const res = await req.json();

	return res
}

export const FetchApi = {
	apiGithubUser,
	apiGithubRepos
}