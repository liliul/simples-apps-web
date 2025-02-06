const data = new FormData

data.append('name','Som Goku')
data.append('name','Vegeta')
data.append('name','Naruto')

data.append('poder','kame kame haaa!')
data.append('poder','ego inflado!')
data.append('poder','rasengan!')




console.log(data.getAll('name'))
console.log(data.getAll('poder'))



/**
 * 
 * 1. keys()
 * O método .keys() retorna um iterador que lista todas as chaves (nomes dos campos)
 * contidas no objeto FormData. As chaves são strings.
 * */

for (const infos of data.keys()) {
	console.log('keys: ', infos)
}





/**
 * 
 * 2. values()
 * O método .values() retorna um iterador que lista todos os valores contidos no objeto
 * FormData. Os valores podem ser strings ou objetos Blob.
 * */

for (const infos of data.values()) {
	console.log('values: ', infos)
}




/**
 * 
 * 3. entries()
 * O método .entries() retorna um iterador que lista todos os pares chave-valor contidos no objeto FormData.
 * Cada par é retornado como um array, onde o primeiro elemento é a chave e o segundo é o valor.
 * 
 * */

for (const infos of data.entries()) {
	console.log('entries: ', infos)
}

for (const [key, value] of data.entries()) {
	console.log(`[key, value]: > ${key} - ${value}`)
}


console.log('----------------------------------------------------------------------')


/**
 * O método delete() do objeto FormData é usado para remover um par chave-valor de um objeto FormData. 
 * No entanto, ele tem suporte limitado em alguns navegadores, como Safari e Internet Explorer
 * */

console.log(data.delete('name') ?? 'Esse console log vai ser undefined')
console.log(data.getAll('name'))



/**
 * Alternativas para Navegadores com Baixo Suporte
 * Se você precisar de uma solução alternativa para navegadores que não suportam bem o método .delete(), 
 * pode criar um novo objeto FormData e adicionar apenas os campos desejados:
 * */

let originalFormData = new FormData();
console.log(originalFormData.append("campo1", "Valor 1"));
console.log(originalFormData.append("campo2", "Valor 2"));

// Criar novo FormData sem o campo indesejado.
let novoFormData = new FormData();

for (const [key, value] of originalFormData.entries()) {
    if (key !== 'campo2') { // Excluir campo2.
        console.log(novoFormData.append(key, value));
    }
}
