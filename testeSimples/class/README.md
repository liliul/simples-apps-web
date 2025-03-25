## **JavaScript com Classes - Do Intermediário ao Avançado 🚀**  

Se você já conhece o básico de **classes** em JavaScript, podemos aprofundar em conceitos como **herança, métodos estáticos, polimorfismo, mixins e metaprogramação**.  

---

## **1️⃣ Revisão Rápida: Classes em JavaScript**
Antes de avançarmos, vamos lembrar da estrutura básica de uma classe:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const p1 = new Pessoa("Lucas", 25);
console.log(p1.apresentar()); 
```

---

## **2️⃣ Herança em Classes**
A **herança** permite criar classes que estendem outras classes, reutilizando código.  
Usamos `extends` para herdar os atributos e métodos de outra classe.

```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico de animal...");
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da classe pai
        this.raca = raca;
    }

    fazerSom() {
        console.log("Au Au!"); // Sobrescrevendo o método da classe pai
    }
}

const dog = new Cachorro("Rex", "Labrador");
console.log(dog.nome); // Rex
dog.fazerSom(); // "Au Au!"
```
📌 **O método `super()` chama o construtor da classe pai.**  

---

## **3️⃣ Métodos Estáticos**
Os **métodos estáticos** pertencem à classe e não à instância.  
São úteis para utilitários ou funções auxiliares.

```javascript
class Matematica {
    static somar(a, b) {
        return a + b;
    }

    static multiplicar(a, b) {
        return a * b;
    }
}

console.log(Matematica.somar(5, 3)); // 8
console.log(Matematica.multiplicar(4, 2)); // 8
```
📌 **Não podemos chamar `mat.somar()` porque `somar` pertence à classe, não ao objeto instanciado.**

---

## **4️⃣ Getters e Setters Avançados**
Getters e Setters ajudam a controlar o acesso a propriedades privadas.

```javascript
class ContaBancaria {
    #saldo; // Propriedade privada

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        if (valor < 0) {
            console.log("Erro: Saldo não pode ser negativo!");
        } else {
            this.#saldo = valor;
        }
    }
}

const conta = new ContaBancaria(1000);
console.log(conta.saldo); // 1000
conta.saldo = 500; // Modifica o saldo
console.log(conta.saldo); // 500
```

📌 **Com `get` e `set`, podemos aplicar regras ao acessar ou modificar propriedades.**  

---

## **5️⃣ Polimorfismo**
O **polimorfismo** permite sobrescrever métodos em classes filhas.

```javascript
class Forma {
    calcularArea() {
        return 0;
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

const q = new Quadrado(4);
const c = new Circulo(3);

console.log(q.calcularArea()); // 16
console.log(c.calcularArea()); // 28.27...
```
📌 **O mesmo método `calcularArea` tem diferentes comportamentos dependendo da classe.**

---

## **6️⃣ Mixins (Múltipla Herança)**
O JavaScript não suporta **herança múltipla**, mas podemos usar **Mixins** (funções que adicionam métodos a uma classe).

```javascript
const Voar = {
    voar() {
        console.log(`${this.nome} está voando!`);
    }
};

const Nadar = {
    nadar() {
        console.log(`${this.nome} está nadando!`);
    }
};

class Pato {
    constructor(nome) {
        this.nome = nome;
    }
}

Object.assign(Pato.prototype, Voar, Nadar);

const pato = new Pato("Donald");
pato.voar(); // "Donald está voando!"
pato.nadar(); // "Donald está nadando!"
```
📌 **Usamos `Object.assign()` para adicionar funcionalidades de múltiplos objetos à classe.**

---

## **7️⃣ Metaprogramação com `Proxy`**
O **Proxy** permite interceptar operações em objetos, criando comportamentos dinâmicos.

```javascript
const handler = {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return `A propriedade "${prop}" não existe.`;
        }
    },
    set(target, prop, value) {
        if (typeof value === "number") {
            target[prop] = value;
        } else {
            console.log(`Erro: "${prop}" deve ser um número.`);
        }
    }
};

const obj = new Proxy({}, handler);

obj.idade = 30;
console.log(obj.idade); // 30

obj.nome = "Ana"; // Erro: "nome" deve ser um número.
console.log(obj.nome); // "A propriedade 'nome' não existe."
```
📌 **Podemos validar acessos e modificações dinamicamente.**  

---

## **🔥 Conclusão**
| Conceito            | O que faz? |
|---------------------|-----------|
| **Herança**        | Permite classes herdarem atributos e métodos |
| **Métodos Estáticos** | Métodos chamados sem instanciar a classe |
| **Getters e Setters** | Controla o acesso a propriedades privadas |
| **Polimorfismo**    | Sobrescreve métodos da classe pai |
| **Mixins**          | Simula herança múltipla |
| **Proxy**          | Intercepta e personaliza acessos a objetos |

**💡 Agora você está pronto para trabalhar com classes em um nível avançado! 🚀**