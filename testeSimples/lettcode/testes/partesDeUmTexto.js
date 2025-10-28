function partesDeUmTexto(texto, subTexto) {
	const checandoSemTextoExiste = texto.replaceAll(subTexto, '')

	console.log(checandoSemTextoExiste)
}

partesDeUmTexto('Naruto uzumaki classico anime japoses', 'uzumaki')