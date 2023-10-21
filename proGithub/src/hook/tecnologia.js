import { userConfig } from '../config/config.js';

/**
 * @function 
 * @type {string}
 * @description template html das skills tech dinamicamente vindo das congif do usuario 
*/

const tecnologia = () => {
	return (`
		<div class="skills-user">
	        <h2>Tecnologias</h2>

	        <div class="skill">
	            ${userConfig.skillsTech}
	        </div>
	    </div>
	`)
}

export default tecnologia;