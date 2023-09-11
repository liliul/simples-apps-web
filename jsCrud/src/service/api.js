export default async function searchGithub(user) {
    const req = await fetch(`https://api.github.com/users/${user}`)
    const res = await req.json()

    return res;
}