/**
 * 
 * @param {object[]} username input
 * @returns infos de usuario no github  
 */

export function search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(({login, name, public_repos, followers}) => ({
        login,
        name,
        public_repos,
        followers
    }))
}