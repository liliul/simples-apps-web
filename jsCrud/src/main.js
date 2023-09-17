import {search} from "./service/api.js"
import Card from "./components/Card.js"
import {localStorage} from "./service/localStorage.js"

const input = document.getElementById('search')
let db = []

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

    db.push(json)
 

    
    update()

})
// window.onload = renderCardHTML()

function renderCardHTML() {
    document.getElementById('container').innerHTML = ""

    let json = localStorage.getLocalStorage('jsCrud')
    json.forEach(json => {

        // document.getElementById('container').innerHTML += Card(json.id,json.avatar,json.name,json.login)
        Card(json.id,json.avatar,json.name,json.login)
    })
//    console.log(f);

}
renderCardHTML()
function update() {
    localStorage.setLocalStorage('jsCrud', db)
    renderCardHTML()
}
// update()
// function removeButton() {
//     const del = document.querySelector('.c-card')
//     del.classList.add('dis')
// }
// document.getElementById('del').onclick = removeButton()
// function deleteButton() {
//     const ex = document.getElementById('del')
//     ex.remove()
// }

