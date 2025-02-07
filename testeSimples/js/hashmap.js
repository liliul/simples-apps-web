// Criando um Map
const hashmap = new Map();

// Adicionando pares chave-valor
hashmap.set("nome", "Naruto");
hashmap.set(1, "Som Goku"); // Chaves podem ser de qualquer tipo!
hashmap.set({ id: 1 }, { dados: "Objeto complexo" }); // Chaves podem ser objetos

console.log(hashmap.get("nome")); 

// Verificando se uma chave existe
console.log(hashmap.has(1)); // Saída: true


// hashmap.delete(1);

// Tamanho do Map
console.log(hashmap.size); // Saída: 2

// Iterando sobre o Map
hashmap.forEach((valor, chave) => {
  console.log(chave, valor);
});

// Convertendo para Array (pares [chave, valor])
console.log([...hashmap.entries()]);





const texto = "oi oi mundo mundo mundo";
const palavras = texto.split(" ");
const frequencia = new Map();

for (const palavra of palavras) {
  if (frequencia.has(palavra)) {
    frequencia.set(palavra, frequencia.get(palavra) + 1);
  } else {
    frequencia.set(palavra, 1);
  }
}

console.log([...frequencia.entries()]);
