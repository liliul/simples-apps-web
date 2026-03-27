// WeakMap / WeakSet → controle de memória (avançado)

let usuario = { nome: "Naruto Uzumaki" };

const weakMap = new WeakMap();

weakMap.set(usuario, "dados secretos");
console.log(weakMap.get(usuario));

// usuario = null; // objeto pode ser removido da memória

let obj = { id: 1 };

const ws = new WeakSet();

ws.add(obj);

console.log(ws.has(obj));


// obj = null; // pode ser coletado da memória