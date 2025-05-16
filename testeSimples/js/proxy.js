// const produto = {
//   nome: "Notebook",
//   _preco: 1000
// };

// const proxy = new Proxy(produto, {
//   get(target, prop) {
//     if (prop === "preco") {
//       return target._preco * 0.9; 
//     }
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (prop === "_preco") {
//       if (value < 0) {
//         console.log("Preço inválido!");
//         return false;
//       }
//     }
//     target[prop] = value;
//     return true;
//   }
// });

// console.log(proxy.preco); 
// proxy._preco = -200;      
// console.log(proxy.preco); 



const usuario = {
  nome: "Som",
  sobrenome: "Goku"
};

const proxy = new Proxy(usuario, {
  get(target, prop) {
    if (prop === "nomeCompleto") {
      return `${target.nome} ${target.sobrenome}`;
    }
    return target[prop];
  }
});

console.log(proxy.nomeCompleto); // "João Silva"
