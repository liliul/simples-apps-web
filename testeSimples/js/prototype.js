function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.dizerOla = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const pessoa1 = new Pessoa("Naruto", 30);
const pessoa2 = new Pessoa("Sasuke", 25);

pessoa1.dizerOla();
pessoa2.dizerOla();

console.log(pessoa1.__proto__ === Pessoa.prototype);

console.log(Pessoa.prototype.constructor === Pessoa);


class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico de animal");
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    fazerSom() {
        console.log("Au au!");
    }
}

const rex = new Cachorro("Rex", "Pastor Alemão");
rex.fazerSom();

console.log(rex.__proto__ === Cachorro.prototype);
console.log(Cachorro.prototype.__proto__ === Animal.prototype);