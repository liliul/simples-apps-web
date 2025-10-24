// const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// const uppercase = alfabeto.map((i, index) => {
// 	console.log(i.toUpperCase(), index + 1)
// })

// function criptografiaRomana(letra) {
// 	for (var i = 0; i < alfabeto.length; i++) {
// 		console.log(alfabeto[i], i + 1)

// 		if (letra.includes(alfabeto[i])){
// 			for (var j = 0; j < alfabeto.length; j++) {
// 				console.log(alfabeto[i])
// 			}
// 		}
// 	}
// }

// criptografiaRomana('a')

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')

function cifraDeCesar(texto, deslocamento) {
  return texto
    .toLowerCase()
    .split('')
    .map(letra => {
      const index = alfabeto.indexOf(letra)
      if (index === -1) return letra 
      const novoIndex = (index + deslocamento) % alfabeto.length
      return alfabeto[novoIndex]
    })
    .join('')
}

function decifrarCesar(texto, deslocamento) {
  return cifraDeCesar(texto, alfabeto.length - (deslocamento % alfabeto.length))
}

// Exemplo de uso
const mensagem = 'criptografia romana'
const mensagemCriptografada = cifraDeCesar(mensagem, 3)
const mensagemOriginal = decifrarCesar(mensagemCriptografada, 3)

console.log('Mensagem original:', mensagem)
console.log('Criptografada:', mensagemCriptografada)
console.log('Decifrada:', mensagemOriginal)

console.log(26 - (3%26))