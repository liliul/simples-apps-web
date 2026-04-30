// Array para object
const arr = [
  ["nome", "Naruto"],
  ["idade", 30],
];

const obj = Object.fromEntries(arr);

console.log(obj);

// Object para array
const obj2 = { nome: "João", idade: 30 };

const arr2 = Object.values(obj2);

console.log(arr2);

// pegar so chaves
const arr3 = Object.keys(obj2);

console.log("chave: ", arr3);

// pagar pares
const arr4 = Object.entries(obj);

console.log(arr4);
