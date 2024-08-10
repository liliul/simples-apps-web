document.getElementById('root').innerHTML = `
	${h1()}

	${grid()}
`;

function h1() {
	return (`
		<h1 class='h1'>function javascript</h1>
	`)
}

function grid() {
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
	`)
}