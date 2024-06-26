export function About() {
    const about = document.createElement('section');
    about.classList.add('about', 'bg-orange-600');

    about.innerHTML = `
       <article class="bg-black">
        <h2 class="text-purple-400">About Page</h2>
        <p class="text-green-500">Saiba mais sobre nós.</p>
       </article> 
    
    `;

    return about;
}