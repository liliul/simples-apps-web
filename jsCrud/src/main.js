'use strict'

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

        Card(json.id,json.avatar,json.name,json.login,index)
    })
}

renderCardHTML()
function update() {
    localStorage.setLocalStorage('jsCrud', db)
    renderCardHTML()

}

function removeButton(del) {
    db.splice(del, 1)
    update()
}

window.onload=del()
function del() {
    const del=document.getElementById('del')
    window.addEventListener('click', (e) => {
    let del = document.getElementById('del')
    // let p = del.dataset.id
   console.log('db',e.target.dataset.id)
     removeButton(e.target.dataset.id)
     update()
 })
}
