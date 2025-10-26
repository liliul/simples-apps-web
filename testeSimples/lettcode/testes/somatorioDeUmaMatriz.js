function matrixJS(linha, colunas, valor) {
	let matrix = []

	for ( let i = 0; i < linha; i++) {
		let linha = []

		for ( let j = 0; j < colunas; j++) {
			linha.push(valor)
		}
		matrix.push(linha)
	}

	return matrix
}

let numerosAleatorios = Math.floor((Math.random() * 10))
const ver = matrixJS(5, 4, numerosAleatorios)

const transformarMatrizEmArray = ver.flat()
console.log('transformarMatrizEmArray: ', transformarMatrizEmArray)

const somatorioDoArray = transformarMatrizEmArray.reduce((acc, array) => {
	return acc + array
}, 0)

console.log('somatorioDoArray: ', somatorioDoArray)