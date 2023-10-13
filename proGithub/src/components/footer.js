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
            <div class="icons">
                <a href="#">
                    <div class="icon-img">
                        <img src="./assets/linkedin.svg" >
                    </div>
                </a>

                <a href="#">
                    <div class="icon-img">
                        <img src="./assets/whatsapp.svg" >
                    </div>
                </a>

                <a href="#">
                    <div class="icon-img">
                        <img src="./assets/instagram.svg" >
                    </div>
                </a>
                
                <a href="#">
                    <div class="icon-img">
                        <img src="./assets/mail.svg" >
                    </div>
                </a>
            </div>
        </div>
	`

	document.querySelector('#root').appendChild(footerContainer);
}
