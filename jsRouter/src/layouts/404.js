export function PageError() {
    const pageError = document.createElement('section');
    pageError.classList.add('pageError', 'bg-black');

    pageError.innerHTML = `
      <h2 class='text-blue-500'>Página não encontrada</h2>
      <p class='text-orange-600'>A página solicitada não existe.</p>    
    `;

    return pageError;
}