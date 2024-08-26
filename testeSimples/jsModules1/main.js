import { header } from './components/header/index.js'
import { content } from './components/content/index.js';
import { footer } from './components/footer/index.js';

function Main() {
    return (`
        <section class='isolate'>
            <header class="w-full h-[280px]">
                ${header.HeaderComponent()}
            </header>

            <main class="w-full">
                ${content.ContentComponent()}
            </main>

            <footer class="w-full">
                ${footer.FooterComponent()}
            </footer>
        </section>
    `)
}

export const main = {
    Main
}
