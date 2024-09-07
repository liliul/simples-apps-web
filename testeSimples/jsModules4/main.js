document.getElementById("root").innerHTML = `${home()}`;


function home() {
    return (`
        <header class="">${menu()}</header>
    `)
}



function menu() {
    return (`
        <div class="w-[1000px] h-[100vh] m-auto bg-slate-100">
            <div class="">
                <h1 class="text-orange-500">Menu</h1>
                
                <div class="">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Exit</li>
                        <li>Category</li>
                        <li>Config</li>
                    </ul>
                </div>
            </div>
        </div>
    `)
}
