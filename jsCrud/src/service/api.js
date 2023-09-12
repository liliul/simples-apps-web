async function searchGithub(user) {
    const req = await fetch(`https://api.github.com/users/${user}`)
    const {name, login, id} = await req.json()

    // const {name, login, id} = res; 
    return console.log(name, login, id);
}

export const search = {
    searchGithub
}