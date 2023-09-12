import {search} from "./service/api.js"

const input = document.getElementById('search')

// input.addEventListener('change', async (e) => {
//     const u = await search.searchGithub(input.value)
//     console.log(u)
// })

async function api(sa) {
    const name = await search.searchGithub(sa)
    return name.id
}
console.log(api('diego3g'))