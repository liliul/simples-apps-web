
class Ninja {
    constructor(){
        this.nome
        this.idade
        this.poder
    }
}

class Uchiha extends Ninja {
    constructor(){
        super()
    }

    apresentandoOuchiha() {
        console.log(`Eu sou ${this.nome} tenho ${this.idade} anos. E meu poder é o ${this.poder}` );
    }

    ativarSharingan(){
        console.log('Sharingan ATIVADO')
    }
}

class Uzumaki extends Ninja {
    constructor(){
        super()
    }

    apresentandoOuzumaki() {
        console.log(`Eu sou ${this.nome} tenho ${this.idade} anos. E meu poder é o ${this.poder}` );
    }

    usarRasengan(){
        console.log('RRRRRRasenngannnnnnnn')
    }
}


class Shinobi {

    init() {
        const uchiha = new Uchiha()
        uchiha.nome = 'Sasuke Uchiha'
        uchiha.idade = 19
        uchiha.poder = 'Sharingan'
        uchiha.apresentandoOuchiha()
        uchiha.ativarSharingan()

        const uzumaki = new Uzumaki()
        uzumaki.nome = 'Naurto Uzumaki'
        uzumaki.idade = 19
        uzumaki.poder = 'Raposa de nove caldas'
        uzumaki.apresentandoOuzumaki()
        uzumaki.usarRasengan()
    }
}

const shinobi = new Shinobi()
shinobi.init()