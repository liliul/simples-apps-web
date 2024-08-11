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
	return (`
		<article class='container-card'>
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
			<div class='card'></div>
			<div class='card'></div>
		</article>

		${alerta(msg)}
	`)
}

function alerta(msg) {
	return alert(`function and function: ${msg}`)
}