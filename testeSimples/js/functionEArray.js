let listaArray = ['Naruto', 'Goku', 'Vegeta','Itachi', 'Kakashi','Picollo','Gohan','Saduke','Tobi']

function lendoArray(array) {

    const mostarResultado = array.map((itens, index) => {
        console.log({id: index, personagens:itens});
    })

    return mostarResultado
}

lendoArray(listaArray)

console.log('---------------------------------------------------------');


const personagem = {
    nome: 'Naruto',
    idade: 21,
    vila: 'Konoha'
};

const entries = Object.entries(personagem);

console.log(entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

console.log('----------------------------------------------------------');

const keysArray = Object.keys(personagem)
    .map(key => { 
        return { [key]: personagem[key] }; 
    });
console.log(keysArray);

console.log('----------------------------------------------------------');


const valuesArray = Object.values(personagem); 
console.log(valuesArray);