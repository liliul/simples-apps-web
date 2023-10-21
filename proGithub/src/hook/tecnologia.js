import { userConfig } from '../config/config.js';

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