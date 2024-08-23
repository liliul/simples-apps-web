import { header } from './components/header/index.js'

document.getElementById('root').innerHTML = `
    ${main()}
`;

function main() {
    return (`
        <section class='isolate'>
            <header class="w-full h-[280px]">
                ${header.HeaderComponent()}
            </header>

            <main>
                <h1>Content</h1>
            </main>

            <footer>
                <h1>Footer</h1>
            </footer>
        </section>
    `)
}
