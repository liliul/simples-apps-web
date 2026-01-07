function AdvinhaOnumero() {
    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gerarNumerosMinMax(min, max) {
        const arrayNumeros = []
        for (let i = min; i < max; i++) {
            arrayNumeros.push(i)
        }

        return arrayNumeros
    }

    function verificarBuscaBinaria(arr, alvo) {
        console.log("Busca Binaria...")
        
        let inicio = 0;
        let fim = arr.length - 1;
        let counter = 0

        while (inicio <= fim) {
            counter++

            const meio = Math.floor((inicio + fim) / 2);
        
            console.group(
                `Tentativa ${counter} | `,
                `Início: ${inicio} | Fim: ${fim} | `,
                `Meio: ${meio} | Valor do meio: ${arr[meio]}`
            )

            if (arr[meio] === alvo) {
                return {
                    posicao: meio,
                    tentativas: counter
                }
            }

            if (arr[meio] < alvo) {
                inicio = meio + 1;
                
            } else {
                fim = meio - 1;
            }
        }

        return {
            posicao: -1,
            tentativas: counter
        }
    }

    return { gerarNumeroAleatorio, gerarNumerosMinMax, verificarBuscaBinaria }
}
const a = AdvinhaOnumero().gerarNumeroAleatorio(1, 300)
const b = AdvinhaOnumero().gerarNumerosMinMax(1, 300)
const c = AdvinhaOnumero().verificarBuscaBinaria(b, a)

if (c.posicao != -1) {
    console.log('numero: ', c.posicao);
    console.log('Tentativas: ', c.tentativas);
    
} else {
    console.log('nao');
    console.log('Tentativas: ', c.tentativas);
}
