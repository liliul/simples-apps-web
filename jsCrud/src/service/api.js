async function searchGithub(user) {
    const req = await fetch(`https://api.github.com/users/${user}`)
    const {id, avatar_url, name, login} = await req.json()

    return {id, avatar_url, name, login};
}

export const search = {
    searchGithub
}
