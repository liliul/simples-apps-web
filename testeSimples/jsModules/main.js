import { getApiNaruto } from './api/index.js'
const clans = await getApiNaruto('clans')
const akatsuki = await getApiNaruto('akatsuki')
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
                    ${h1('Clans.')}
                </nav>
                
                <article class='c-card'>
                    ${h1('Akatsuki.')}
                </article>

                <aside class='c-card'>
                    ${h1('Characters.')}
                </aside>
            </section>            
        </main>    
    `)    
}

function h1(texto) {
    return (
        `<h1 class='h1'>${texto}</h1>`
    )
}
