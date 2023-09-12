async function searchGithub(user) {
    const req = await fetch(`https://api.github.com/users/${user}`)
    
    return await req.json()
}

export const search = {
    searchGithub
}