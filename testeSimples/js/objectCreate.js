// const pessoaBase = {
//   saudacao() {
//     return `Olá, meu nome é ${this.nome}`;
//   }
// };

// const pessoa = Object.create(pessoaBase, {
//   nome: {
//     value: "Kakashi Hatake",
//     writable: true,
//     enumerable: true
//   },
//   idade: {
//     value: 30,
//     writable: false,
//     enumerable: true
//   }
// });

// console.log(pessoa.saudacao()); 
// console.log(pessoa.idade);      
// pessoa.idade = 40;
// console.log(pessoa.idade);      


const pessoa = {};

Object.defineProperties(pessoa, {
  nome: {
    value: "Madara Uchiha",
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
