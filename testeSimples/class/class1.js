class ContaBancaria {
    #saldo;

    constructor(nome, saldoInicial) {
        this.nome = nome;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        console.log('#:', this.#saldo);
        
        this.#saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
    }

    verSaldo() {
        console.log(`Saldo de ${this.nome}: R$${this.#saldo}`);
    }
}

const conta = new ContaBancaria("João", 1000);
conta.depositar(500);
conta.verSaldo(); // Saldo de João: R$1500
// console.log(conta.#saldo); // Erro: Propriedade privada
