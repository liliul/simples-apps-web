async function apiGithubUser(url) {
	const req = await fetch(url);

	return await req.json();
}

async function apiGithubRepos(url) {
	const req = await fetch(url);

	return await req.json();
}

export const FetchApi = {
	apiGithubUser,
	apiGithubRepos
}