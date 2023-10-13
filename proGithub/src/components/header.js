/**
 * @param {string} Header
 * @return template html header
 */

export function Header() {
	const headContainer = document.createElement('header');
	headContainer.classList.add('head');

	headContainer.innerHTML = `	
	    <div class="user-info">
	      <div class="c-img">
	        <div class="img">
	            <img id="avatar" >
	          
	        </div>
	        
	        <div class="nome-user">
	            <h1 id="userNome"></h1>
	        </div>
	      </div>

	      <div class="info-rede">
	          <div class="bio">
	              <h2>Bio</h2>
	              <p id="bio">
	              </p>
	          </div>

	          <div class="links">
	            <a id="link-github" href="#">
	                <div class="i-link" title="link para o github">
	                    <img src="./assets/github.svg">
	                </div>
	            </a>

	            <a id="link-blog" href="#">
	                <div class="i-link" title="link para o blog">
	                    <img src="./assets/globe.svg">
	                </div>
	            </a>
	          </div>
	      </div>
	    </div>

	    <div class="skills-user">
	        <h2>Tecnologias</h2>

	        <div class="skill">
	            <div class="item-skills">
	                <p>javascript</p>
	            </div>
	            <div class="item-skills">
	                <p>html</p>
	            </div>
	            <div class="item-skills">
	                <p>css</p>
	            </div>
	            <div class="item-skills">
	                <p>node</p>
	            </div>
	            <div class="item-skills">
	                <p>git</p>
	            </div>
	            <div class="item-skills">
	                <p>reactnative</p>
	            </div>
	            <div class="item-skills">
	                <p>react</p>
	            </div>
	            <div class="item-skills">
	                <p>github</p>
	            </div>
	            <div class="item-skills">
	                <p>sass</p>
	            </div>
	        </div>
	    </div>
	`
	document.querySelector('#root').insertAdjacentElement('afterbegin',headContainer)
}