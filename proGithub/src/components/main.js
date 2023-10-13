/**
 * @param {string} Main
 * @return template html conteudo principal
 */

export function Main() {
	const mainContainer = document.createElement('main');
	mainContainer.classList.add('content');

	mainContainer.innerHTML = `
		   <!-- aside menu -->
		    <aside class="menu">
		        <ul class="m-ul">
		           <li class="m-li">
		            <div>
		                <img src="./assets/map-pin.svg">
		            </div>
		            <div>
		                <span id="local" class="text"></span>
		            </div>
		           </li>
		           <li class="m-li">
		            <div>
		                <img src="./assets/briefcase.svg">
		            </div>
		            <div>
		                <span id="company" class="text"></span>
		            </div>
		           </li>
		           <li class="m-li">
		            <div>
		                <img src="./assets/twitter.svg">
		            </div>
		            <div>
		                <a id="twitter" class="text"></a>
		            </div>
		           </li>

		           <li class="m-li">
		            <div>
		                <img src="./assets/star.svg">
		            </div>
		            
		            <div>
		                <span class="text">Followers</span>
		                <span id="followers" class="text numStyle"></span>
		            </div>
		           </li>

		           <li class="m-li">
		            <div>
		                <img src="./assets/star.svg">
		            </div>
		            
		            <div>
		                <span class="text">Following</span>
		                <span id="following" class="text numStyle"></span>
		            </div>
		           </li>

		           <li class="m-li">
		            <div>
		                <img src="./assets/folder.svg">
		            </div>
		            
		            <div>
		                <span class="text">Repos</span>
		                <span id="repo-public" class="text numStyle"></span>
		            </div>
		           </li>
		          
		           <li class="m-li">
		            <div>
		                <img src="./assets/git-branch.svg">
		            </div>
		            
		            <div>
		                <span class="text">Gists</span>
		                <span id="gists-public" class="text numStyle"></span>
		            </div>
		           </li>
		        </ul>
		    </aside>


		    <!-- card -->
		    <section id="cards" class="cards-container">
		        <div class="text-github">
		            <h1>Repositorios GitHub</h1>
		        </div>


		    </section>

	`

	document.querySelector('#root').appendChild(mainContainer)
}
