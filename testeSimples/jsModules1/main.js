import { header } from './components/header/index.js'
import { content } from './components/content/index.js';

document.getElementById('root').innerHTML = `
    ${main()}
`;

function main() {
    return (`
        <section class='isolate'>
            <header class="w-full h-[280px]">
                ${header.HeaderComponent()}
            </header>

            <main class="w-full">
                ${content.ContentComponent()}
            </main>

            <footer>
                <h1>Footer</h1>
            </footer>
        </section>
    `)
}
