import { utils } from './utils.js';

document.getElementById('root').innerHTML = `
	${utils.h1()}

	${grid('variavel por parametro function')}
`;

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
			<div class='card'>${cardDrawcss()}</div>
			<div class='card'></div>
			<div class='card'></div> 
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

function alerta(msg) {
	return alert(`function and function: ${msg}`)
}

function simNao(simNao) {
	const msTrueOrFalse = utils.trueFalse;
	return (`
		<h2 class='mensagem'>Mensagem: <span class='${msTrueOrFalse === true ? 'verde' : 'vermelho'}'>${simNao}</span></h2>
	`)
}

function cardDrawcss() {
	return (`
		<section style='${utils.cardDrawcss}'>
			<span style='${utils.cardDrawSpan1css}'></span>
			<span style='${utils.cardDrawSpan2css}'></span>
			<span style='${utils.cardDrawSpan3css}'></span>
		</section>
	`)
}
