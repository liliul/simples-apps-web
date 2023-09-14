import {search} from "./service/api.js"
import Card from "./components/Card.js"

const input = document.getElementById('search')

input.addEventListener('change', async (e) => {
    if(input.value === undefined) return
    
    const w = await search.searchGithub(input.value)
    console.log(w)
    if(w.message === "Not Found") return

    const json = {
        'id':w.id,
        'avatar':w.avatar_url,
        'name':w.name,
        'login':w.login

    }

    document.getElementById('container').innerHTML +=Card(json.id,json.avatar,json.name,json.login)
    
})
// function removeButton() {
//     const del = document.getElementById('del')
//     del.remove()
// }
