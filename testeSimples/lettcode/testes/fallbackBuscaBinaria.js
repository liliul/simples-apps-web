class BuscaBinariaComFallback {
    constructor() {}

    buscaComFallback(arr, alvo) {
        let inicio = 0;
        let fim = arr.length - 1;
        let counter = 0;

        while (inicio <= fim) {
            counter++;
            const meio = Math.floor((inicio + fim) / 2);

            console.group(`Tentativa ${counter}`);
            console.log(`Início: ${inicio} | Fim: ${fim}`);
            console.log(`Meio: ${meio} | Valor: ${arr[meio]}`);

            if (arr[meio] === alvo) {
                console.log("✅ Encontrado com busca binária");
                console.groupEnd();
                return { posicao: meio, tentativas: counter, metodo: "binária" };
            }

            if (arr[meio] < alvo) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }

            console.groupEnd();
        }

        console.warn("⚠️ Busca binária falhou. Executando fallback linear...");

        const posicaoLinear = this.buscaLinear(arr, alvo);

        return {
            posicao: posicaoLinear,
            tentativas: counter,
            metodo: "linear (fallback)"
        }
    }

    buscaLinear(arr, alvo) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === alvo) {
            return i;
            }
        }

        return -1;
    }

    isOrdenado(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }

        return true;
    }

    criarArray(min, max) {
        const array = [];

        for (let i = min; i <= max; i++) {
            array.push(i);
        }

        return array
    }

    buscaInteligente(arr, alvo) {
        if (!this.isOrdenado(arr)) {
            console.warn("⚠️ Array não ordenado. Usando busca linear.");
            return buscaLinear(arr, alvo);
        }

        return this.buscaComFallback(arr, alvo);
    }

    init(min, max, alvo) {
        const criarArray = this.criarArray(min, max)

        this.buscaInteligente(criarArray, alvo)
    }
}

const buscaBinariaComFallback = new BuscaBinariaComFallback()
const iniciar = buscaBinariaComFallback.init(1, 300, 155)
