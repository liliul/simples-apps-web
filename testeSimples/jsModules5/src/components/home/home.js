import { Header } from "../header/header.js";

export function Home() {
    return (`
        <div class="w-full m-auto p-3 bg-slate-300 rounded-lg">
            ${Header()}
        </div>
    `)
}
