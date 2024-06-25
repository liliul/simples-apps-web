export function Home() {
    const home = document.createElement('section');
    home.classList.add('home', 'bg-white');

    home.innerHTML = `
       <header>
        <p>Home</p>
       </header> 
    
    `;

    return home;
}