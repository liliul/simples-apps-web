import { userConfig } from '../config/config.js';

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

	    ${skills()}
	`
	document.querySelector('#root').insertAdjacentElement('afterbegin', headContainer);
}


const skills = () => {
	return (`
		<div class="skills-user">
	        <h2>Tecnologias</h2>

	        <div class="skill">
	            <div class="item-skills">
	                <p>${userConfig.skills.tech1}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech2}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech3}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech4}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech5}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech6}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech7}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech8}</p>
	            </div>
	            <div class="item-skills">
	                <p>${userConfig.skills.tech9}</p>
	            </div>

	            ${s}
	        </div>
	    </div>
	`)
}

const s = `
	<div class="item-skills">
	    <p>dasdasdas</p>
	</div>

	<div class="item-skills">
	                <p>askdas</p>
	            </div>
    <div class="item-skills">
	                <p>aasssdd</p>
	            </div>
`
console.log(s)
function dd() {
	let dd = s.forEach((i) => {
	const div = document.createElement('div')
	let d = div.innerHTML = `<p>${i}</p>`
	
	})
	console.log(dd)
}
// dd()	
// const o = Object.keys(userConfig.skills).forEach((items) => {
// 	const div = document.createElement('div')
// 	div.innerHTML = `<p>${userConfig.skills[items]}</p>`
// 	return div
// })
// console.log(o)
// function f() {
// 	for (const items in userConfig.skills) {
// 	console.log(userConfig.skills[items])
// 		const div = document.createElement('div')
// 		div.innerHTML = `<p>${userConfig.skills[items]}</p>`
// 		return div
// 	}
// }

// console.log(f())