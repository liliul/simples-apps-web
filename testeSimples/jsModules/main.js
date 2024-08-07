import { getApiNaruto } from './api/index.js'

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

                    <article id='tagIdCharacters'></article>
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
        <p class='tagAkatsuki'>${listAkatsuki.name}</p>
    `
   })
}
akaHtml()

async function charactersHtml() {
    const characters = await getApiNaruto('characters')

    return characters.characters.map((listCharacters) => {
        document.getElementById('tagIdCharacters').innerHTML += `
            <p class='tagCharacters'>${listCharacters.name}</p>
        `
    })
}
charactersHtml()

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