import { getApiNaruto } from './api/index.js'
// const clans = await getApiNaruto('clans')
// const akatsuki = await getApiNaruto('akatsuki')
const characters = await getApiNaruto('characters')

const divRoot = document.getElementById('root')

divRoot.innerHTML += `
    ${header()}
    ${content()}
`

function header() {
    return (
        `
            <header class='header'>
                <div class='logo'>
                    <span class='lo-span cor1'></span>
                    <span class='lo-span cor2'></span>
                    <span class='lo-span cor3'></span>
                </div>

                <div class='he-title'>
                    ${h1('Animes ou Desenhos <strong class="he-strong">animados.</strong>')}
                </div>
            </header>
        `
    )
}

 function content() {
   
    return (`
        <main class='main-container'>
            <section class='container'>
                <nav class='c-card'>
                    ${h2('Clans.')}

                    <article id='tagIdClans'></article>                
                </nav>
                
                <article class='c-card'>
                    ${h2('Akatsuki.')}

                    <article id='tagIdAkatsuki'></article>
                </article>

                <aside class='c-card'>
                    ${h2('Characters.')}
                </aside>
            </section>            
        </main>    
    `)    
}

async function clansMap() {
    const clans = await getApiNaruto('clans')

    return clans.clans.forEach((listClans) => {
        document.getElementById('tagIdClans').innerHTML += `
            <p class='tagClans'>
                <strong class='tagClans-id'>${listClans.id}:</strong>
                ${listClans.name}
            </p>
    `
    })
}
clansMap()

async function akaHtml() {
    const akatsuki = await getApiNaruto('akatsuki')
    
   akatsuki.akatsuki.map((listAkatsuki) => {
    document.getElementById('tagIdAkatsuki').innerHTML += `
        <p>${listAkatsuki.name}</p>
    `
   })
}
akaHtml()

function h1(texto) {
    return (
        `<h1 class='h1'>${texto}</h1>`
    )
}

function h2(texto) {
    return (
        `<h2 class='h2'>${texto}</h2>`
    )
}