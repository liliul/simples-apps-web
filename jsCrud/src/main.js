import {search} from "./service/api.js"
import Card from "./components/Card.js"
import {localStorage} from "./service/localStorage.js"

const input = document.getElementById('search')
let db = []

input.addEventListener('change', async (e) => {
    if(input.value === undefined) return
    
     db = localStorage.getLocalStorage('jsCrud')

     const a = db.find(user => user.login === input.value)

    if(a) return

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

function renderCardHTML() {
    document.getElementById('container').innerHTML = ""

    db = localStorage.getLocalStorage('jsCrud')

    db.forEach((json, index) => {

        // document.getElementById('container').innerHTML += Card(json.id,json.avatar,json.name,json.login)
        Card(json.id,json.avatar,json.name,json.login,index)
    })

    // document.getElementById('del').onclick = removeButton(document.getAttribute('data-id')) 
    
}

renderCardHTML()
function update() {
    localStorage.setLocalStorage('jsCrud', db)

    renderCardHTML()

}
// deleteUser('18133')
// function deleteUser(user) {
//    let ddd = db.filter(del => {
//     console.log(del)    
//    })
//     console.log(ddd)
//     update()
// }
// let del = document.getElementById('del')
// del.onclick = deleteUser(document.querySelector("[data-id='18133']"))


// update()
function removeButton(del) {
    // const del = document.querySelector('.c-card')
    // del.classList.add('dis')
    db.splice(del, 1)
    update()
}
document.getElementById('del').addEventListener('click', (e) => {
    console.log(e.target.dataset.id)
    removeButton(e.target.dataset.id)
})


// removeButton(2)
 
// document.getElementById('del').onclick = deleteButton()
// function deleteButton() {
//     const ex = document.querySelector('.c-card')
//     ex.remove()
// }

