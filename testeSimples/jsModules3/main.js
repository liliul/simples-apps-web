import { utils } from './utils.js';

document.getElementById('root').innerHTML = `
	${h1()}

	${grid('variavel por parametro function')}
`;

function h1() {
	return (`
		<h1 class='h1'>function javascript</h1>
	`)
}

function grid(msg) {
	const mensagem = utils.trueFalse;
	alerta(msg)

	return (`
		<article class='container-card'>
			<div class='card'></div>
			<div class='card'>${mensagem === true ? simNao('Ativado') : simNao('Desativado')}</div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div> 
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
			<div class='card'></div>
		</article>
	`)
}

function alerta(msg) {
	return alert(`function and function: ${msg}`)
}

function simNao(simNao) {
	const msTrueOrFalse = utils.trueFalse;
	return (`
		<h2 class='mensagem'>Mensagem: <span class='${msTrueOrFalse === true ? 'verde' : 'vermelho'}'>${simNao}</span></h2>
	`)
}
