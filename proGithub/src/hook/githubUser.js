import { URL } from '../service/url.js';

const urlTwitter = `${URL.URL_TWITTER}`;
let http = 'https://';

/**
 * função que renderiza html
 *
 * @param {object} data
 * @returns template html que retorna informação do usuario da api github
*/

export function User(data) {
    const nome = document.querySelector('#userNome')
    const avatar = document.querySelector('#avatar')
    const bio = document.querySelector('#bio')

    const linkGithub = document.querySelector('#link-github')
    const linkBlog = document.querySelector('#link-blog')

    const local = document.querySelector('#local')
    const company = document.querySelector('#company')
    const twitter = document.querySelector('#twitter')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')
    const reposPublic = document.querySelector('#repo-public')
    const gistsPublic = document.querySelector('#gists-public')

	nome.innerText = data.name
    avatar.src = data.avatar_url

    linkGithub.href = data.html_url
    bio.innerText = data.bio

    const bloglink = data.blog
    linkBlog.href = `${http}${bloglink}`

    local.innerText = data.location
    company.innerText = data.company
    
    const twitterlink = data.twitter_username
    twitter.innerText = data.twitter_username
    twitter.href = `${urlTwitter}${twitterlink}`
    
    followers.innerText = data.followers
    following.innerText = data.following

    reposPublic.innerText = data.public_repos
    gistsPublic.innerText = data.public_gists
}
