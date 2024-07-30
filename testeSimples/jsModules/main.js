const divRoot = document.getElementById('root')

divRoot.innerHTML = `
    ${content()}
    ${h1('Naruto VS Goku')}
`

function content() {
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

function h1(texto) {
    return (
        `<h1 class='h1'>${texto}</h1>`
    )
}