// let matrix = []

// for (var i = 0; i < 10; i++) {
// 	let linha = []
// 	for (var j = 0; j < i; j++) {
// 		linha.push(j)
// 	}
// 	matrix.push(linha)
// }

// console.log(matrix)

// function matrixJS(linha, colunas, valor) {
// 	let matrix = []

// 	for ( let i = 0; i < linha; i++) {
// 		let linha = []

// 		for ( let j = 0; j < colunas; j++) {
// 			linha.push(valor)
// 		}
// 		matrix.push(linha)
// 	}

// 	return matrix
// }
// let numerosAleatorios = Math.floor(Math.random() * 10)
// const ver = matrixJS(5, 4, numerosAleatorios)
// console.log('matrix: ', ver)

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
//   }
// }

let impar = 0;
let pares = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] % 2 === 0) pares++;
    if (matriz[i][j] % 2 === 1) impar++;
  }
}
console.log('Quantidade de pares:', pares);
console.log('Quantidade de impar:', impar);
