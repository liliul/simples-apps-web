// const arrayComDuplicados = [1, 1, 2, 3, 3];
// const conjuntoUnico = new Set(arrayComDuplicados);
// const arraySemDuplicados = Array.from(conjuntoUnico);
// 
// console.log(arraySemDuplicados); 


// const arrayComDuplicados = [1, 1, 2, 3, 3, 4, 4, 55, 5];
// const arraySemDuplicados = arrayComDuplicados.filter((item, index) => {
//     return arrayComDuplicados.indexOf(item) === index;
// });
// 
// console.log(arraySemDuplicados);

/*
const arrayComDuplicados = [1, 1, 2, 3, 3, 4, 5, 5, 5];
const obj = {};
const arraySemDuplicados = arrayComDuplicados.filter(item => {
    return obj.hasOwnProperty(item) ? false : (obj[item] = true);
});

console.log(arraySemDuplicados);*/


const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 31 },
    { nome: 'João', idade: 31 }
];

const pessoasUnicas = [...new Set(pessoas.map(p => JSON.stringify(p)))].map(p => JSON.parse(p));

console.log(pessoasUnicas)
