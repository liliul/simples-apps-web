export function Contact() {
    const contact = document.createElement('section');
    contact.classList.add('contact', 'bg-orange-600');

    contact.innerHTML = `
       <article>
        <p class='text-gray-200'>Contact</p>
       </article> 
    
    `;

    return contact;
}