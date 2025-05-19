class Ninja {
    constructor() {
        if (this.constructor === Ninja) {
            throw new Error("Classe Ninja é abstrata e não pode ser instanciada diretamente.");
        }
        this.nome = '';
        this.idade = 0;
        this.poder = '';
    }

    // Método abstrato que deve ser implementado pelas subclasses
    apresentar() {
        throw new Error('Método "apresentar" deve ser implementado na classe filha');
    }
}

class Uchiha extends Ninja {
    constructor() {
        super();  // Chama o construtor da classe pai
    }

    // Implementação do método "apresentar" para a classe Uchiha
    apresentar() {
        console.log(`Eu sou ${this.nome}, tenho ${this.idade} anos e meu poder é o ${this.poder}.`);
    }

    ativarSharingan() {
        console.log('Sharingan ATIVADO');
    }
}

class Uzumaki extends Ninja {
    constructor() {
        super();  // Chama o construtor da classe pai
    }

    // Implementação do método "apresentar" para a classe Uzumaki
    apresentar() {
        console.log(`Eu sou ${this.nome}, tenho ${this.idade} anos e meu poder é a ${this.poder}.`);
    }

    usarRasengan() {
        console.log('RRRRRRasengan!!!!');
    }
}

class Shinobi {
    init() {
        // Criando instâncias de Uchiha e Uzumaki
        const uchiha = new Uchiha();
        uchiha.nome = 'Sasuke Uchiha';
        uchiha.idade = 19;
        uchiha.poder = 'Sharingan';

        // Chamando o método polimórfico
        uchiha.apresentar();
        uchiha.ativarSharingan();

        const uzumaki = new Uzumaki();
        uzumaki.nome = 'Naruto Uzumaki';
        uzumaki.idade = 19;
        uzumaki.poder = 'Raposa de Nove Caldas';

        // Chamando o método polimórfico
        uzumaki.apresentar();
        uzumaki.usarRasengan();
    }
}

const shinobi = new Shinobi();
shinobi.init();
