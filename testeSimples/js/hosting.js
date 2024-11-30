console.log(returnObeject())

function returnObeject() {
    return ({
        name: "Som Goku",
        city: "Tokyo",
        poder: "Kame kame haaaa"
    })
}

console.log(returnObeject())

/**
 * 
 **Hoisting** é um comportamento do JavaScript no qual as declarações de variáveis e funções são "elevadas" para o topo do seu contexto de execução (como o topo de uma função ou do código global). Isso significa que, no momento da execução, o JavaScript sabe sobre essas variáveis e funções antes mesmo de você as declarar, mas a maneira como elas são "elevadas" depende de como são declaradas.

### Hoisting de Variáveis

No JavaScript, o **hoisting** se aplica de forma diferente dependendo de como a variável foi declarada. Vamos ver como funciona com `var`, `let` e `const`.

#### 1. **Hoisting com `var`**

Quando você declara uma variável usando `var`, apenas a declaração (e não a atribuição) é "elevada". Isso significa que a variável fica disponível no código, mas com o valor `undefined`, até que a atribuição seja feita.

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

No exemplo acima, o JavaScript "eleva" a declaração de `var x`, mas não a atribuição. Então, quando tentamos acessar `x` antes de ser atribuído, o valor é `undefined`.

O código acima é equivalente a:

```javascript
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5
```

#### 2. **Hoisting com `let` e `const`**

Com `let` e `const`, a declaração também é "elevada", mas **não** a inicialização. Além disso, essas variáveis estão em uma **zona de "temporal dead zone" (TDZ)**. Isso significa que, enquanto a variável não é inicializada, ela não pode ser acessada. A tentativa de acessá-las antes da declaração resulta em erro.

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

Aqui, `a` é "elevada", mas como ela está em uma zona de "dead zone" até a linha da inicialização, o código gera um erro.

Isso ocorre da mesma forma com `const`:

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
```

No caso de `let` e `const`, **não** é possível acessar a variável antes de ela ser inicializada, ao contrário de `var`.

### Hoisting de Funções

O hoisting de funções funciona de maneira diferente dependendo de como a função é declarada.

#### 1. **Declaração de Função (Function Declaration)**

Com a declaração de função, o JavaScript eleva tanto a declaração quanto a definição da função, permitindo que ela seja chamada antes de ser declarada.

```javascript
saudacao(); // "Olá!"
function saudacao() {
  console.log("Olá!");
}
```

Aqui, a função `saudacao()` é "elevada", então o código acima funciona normalmente, mesmo que a chamada à função seja feita antes da sua declaração.

#### 2. **Expressão de Função (Function Expression)**

Porém, se você estiver utilizando uma expressão de função, o hoisting funciona de maneira diferente. Apenas a **declaração da variável** é elevada, não a atribuição da função. Isso significa que, se você tentar chamar a função antes da definição, você encontrará um erro.

```javascript
console.log(saudacao()); // TypeError: saudacao is not a function
var saudacao = function() {
  console.log("Olá!");
};
```

Aqui, o JavaScript "eleva" a variável `saudacao` com o valor `undefined`, mas ela não se torna uma função até que a linha da atribuição seja executada. Portanto, ao tentar chamar a função antes, você recebe um erro porque `saudacao` ainda é `undefined` quando a chamada ocorre.

### Resumo de Como o Hoisting Funciona:

1. **Com `var`:**
   - A **declaração** é elevada (mas não a atribuição).
   - A variável é inicializada com `undefined`.

2. **Com `let` e `const`:**
   - A **declaração** é elevada, mas o valor não é atribuído até a linha da inicialização.
   - A variável entra em uma "zona de morte temporal" (TDZ), onde não pode ser acessada antes da inicialização.

3. **Funções (declaradas com `function`):**
   - Toda a declaração da função (nome e corpo) é elevada, então pode ser chamada antes da definição.

4. **Funções (expressões de função):**
   - A **declaração da variável** é elevada, mas a função não é atribuída até o código ser executado.

### Exemplos completos:

#### Exemplo com `var`:
```javascript
console.log(a); // undefined
var a = 2;
console.log(a); // 2
```

#### Exemplo com `let`:
```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 3;
```

#### Exemplo com `function`:
```javascript
myFunction(); // "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}
```

#### Exemplo com expressão de função:
```javascript
console.log(myFunc()); // TypeError: myFunc is not a function
var myFunc = function() {
  return "Hello!";
};
```

### Conclusão:
O hoisting pode ser uma fonte de confusão, mas entender como ele funciona pode ajudar a evitar erros comuns, como tentar acessar variáveis antes de sua declaração. Quando usar `let` e `const`, sempre tenha em mente que as variáveis entram em uma "zona de morte temporal" antes da inicialização. 
 
 * */   