// const pessoa = {};
// Object.defineProperty(pessoa, 'nome', {
//   value: 'Naruto uzumaki',
//   writable: false,  // não pode ser alterada
//   enumerable: true, // aparece em loops
//   configurable: false // não pode ser deletada
// });

// console.log(pessoa.nome);
// pessoa.nome = "Sasuke Uchiha";
// console.log(pessoa.nome);



const pessoa = {};

Object.defineProperties(pessoa, {
  nome: {
    value: "Itachi Uchiha",
    writable: true,
    enumerable: true
  },
  idade: {
    value: 30,
    writable: false,
    enumerable: true
  },
  saudacao: {
    get() {
      return `Olá, meu nome é ${this.nome}`;
    },
    enumerable: true
  }
});

console.log(pessoa.saudacao);
pessoa.idade = 35;
console.log(pessoa.idade); 

