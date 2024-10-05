import { Header } from "../header/header.js";

export function Home() {
    const div = document.createElement('div')

    div.innerHTML = `
        <div id="idHome" class="w-full m-auto p-3 bg-slate-300 rounded-lg">
            ${Header()}
        </div>
    `

    document.getElementById('root').appendChild(div)
}
