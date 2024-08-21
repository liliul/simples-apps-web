import { utils } from "./utils.js";

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

function textoHtml(texto) {
	return (`
		<p style='${utils.textoCss}'>${texto}</p>
	`)
}

export const component = {
    alerta,
    simNao,
    cardDrawcss,
	textoHtml
}
