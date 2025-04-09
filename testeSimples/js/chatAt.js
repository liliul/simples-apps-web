const letra = 'Naruto'

function pegaUmLetra(str, num) {
	// for (let i=0;i< str.length; ++i) {
	// 	console.log(i[num])

	// 	if(i === num) {
	// 		console.log('sim')
	// 	}else {
	// 		console.log('nao')
	// 	}
	// }

	// for(let letras of str) {
	// 	if (letras.length === num) {
	// 		console.log('sim')


	// 	}else {
	// 		console.log('nao')

	// 	}
	// }
	
	if (num >= 0 && num < str.length) {
        return console.log(str[num]); 
    } else {
        return ''; 
    }
}

pegaUmLetra(letra,1)
pegaUmLetra(letra,3)
pegaUmLetra(letra,5)
