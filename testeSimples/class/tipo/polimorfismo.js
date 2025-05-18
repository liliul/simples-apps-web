class Ninja {
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.poder = '';
    }

    // Método comum que será sobrescrito nas classes filhas
    apresentar() {
        console.log(`Eu sou ${this.nome}, tenho ${this.idade} anos e meu poder é o ${this.poder}.`);
    }
}

class Uchiha extends Ninja {
    constructor() {
        super();
    }

    // Sobrescrevendo o método 'apresentar' para o Uchiha
    apresentar() {
        console.log(`Eu sou ${this.nome}, tenho ${this.idade} anos e meu poder é o ${this.poder}.`);
    }

    ativarSharingan() {
        console.log('Sharingan ATIVADO');
    }
}

class Uzumaki extends Ninja {
    constructor() {
        super();
    }

    // Sobrescrevendo o método 'apresentar' para o Uzumaki
    apresentar() {
        console.log(`Eu sou ${this.nome}, tenho ${this.idade} anos e meu poder é a ${this.poder}.`);
    }

    usarRasengan() {
        console.log('RRRRRRasengan!!!!');
    }
}

class Shinobi {
    init() {

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
