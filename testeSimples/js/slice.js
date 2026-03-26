// paginação

const itens = [1,2,3,4,5,6,7,8,9,10];

function paginar(lista, pagina, porPagina) {
  const inicio = (pagina - 1) * porPagina;
  const fim = inicio + porPagina;

  return lista.slice(inicio, fim);
}
console.log('------------Paginação------------');

console.log(paginar(itens, 2, 3));

console.log('----------fim-------------');


// remover elementos sem alterar original

const arr = [10, 20, 30, 40];

const novo = [
  ...arr.slice(0, 1),
  ...arr.slice(2)
];

console.log('-------remover elemento sem alterar original-------');

console.log(novo);

console.log('-------------fim------------');


// dividir array em partes chunck

function dividir(lista, tamanho) {
  const resultado = [];

  for (let i = 0; i < lista.length; i += tamanho) {
    resultado.push(lista.slice(i, i + tamanho));
  }

  return resultado;
}

console.log('-----dividir elementos em partes chunk-----');

console.log(dividir([1,2,3,4,5,6], 2));

console.log('----------fim-----------');


// formatar strings

const cpf = "12345678900";

const formatado = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9)}`;

console.log('------------formatar strinigs-------------');

console.log(formatado);

console.log('--------fim--------');
