import redesSocial from '../hook/redesSocial.js';

/**
 * @param {string} Footer
 * @return template html footer
 */

export function Footer() {
	const footerContainer = document.createElement('footer');
	footerContainer.classList.add('footer');

	footerContainer.innerHTML = `
        <div class="icon-rede">
            <h2 class="text-footer">Redes social</h2>
            
            ${redesSocial()}
        </div>
	`

	document.querySelector('#root').appendChild(footerContainer);
}
