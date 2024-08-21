import { utils } from './utils.js';

import { component } from './components.js';

document.getElementById('root').innerHTML = `
	${utils.h1()}

	${grid('variavel por parametro function')}
`;

function grid(msg) {
	const mensagem = utils.trueFalse;
	component.alerta(msg)

	return (`
		<article class='container-card'>
			<div class='card'></div>
			<div class='card'>${mensagem === true ? component.simNao('Ativado') : component.simNao('Desativado')}</div>
			<div class='card'></div>
			<div class='card'>${component.textoHtml('JSmodule3')}</div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'>${component.cardDrawcss()}</div>
			<div class='card'></div>
			<div class='card'>${component.svgHtml()}</div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'>
				${utils.cardBtn()}
			</div>
		</article>
	`)
}
