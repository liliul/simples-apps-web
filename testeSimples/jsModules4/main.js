import { menu } from './components/menu.js';

document.getElementById("root").innerHTML = `${home()}`;


function home() {
    return (`
        <div class="w-[1000px] h-[100vh] m-auto bg-slate-100">
            <header class="ml-10">${menu.Menu()}</header>
        </div>    
    `)
}
