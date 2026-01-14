Ótima pergunta 🙂
Big-O **não “testa” o código rodando**, ele **analisa o custo teórico** (tempo e/ou memória) conforme o tamanho da entrada cresce.

Vou explicar **como usar Big-O na prática**, com **exemplos em JavaScript**.

---

## 1️⃣ O que é Big-O (em poucas palavras)

Big-O mede **como o tempo de execução cresce** quando o tamanho da entrada (`n`) aumenta.

👉 Não importa o computador, nem segundos reais.
👉 Importa **o padrão de crescimento**.

Exemplos comuns:

| Big-O    | Nome        | Crescimento         |
| -------- | ----------- | ------------------- |
| O(1)     | Constante   | Não cresce          |
| O(log n) | Logarítmico | Cresce devagar      |
| O(n)     | Linear      | Cresce proporcional |
| O(n²)    | Quadrático  | Cresce rápido       |
| O(2ⁿ)    | Exponencial | Cresce muito rápido |

---

## 2️⃣ Passo a passo para usar Big-O no seu código

### ✅ Passo 1: Defina o tamanho da entrada

Normalmente chamamos de `n`.

```js
// n = tamanho do array
const arr = [1, 2, 3, 4, 5];
```

---

### ✅ Passo 2: Conte operações que dependem de `n`

Ignore:

- constantes
- variáveis simples
- operações fixas

Foque em:

- loops
- loops dentro de loops
- chamadas recursivas

---

## 3️⃣ Exemplos em JavaScript

---

### 🔹 Exemplo 1: O(1) – constante

```js
function pegaPrimeiro(arr) {
  return arr[0];
}
```

📌 Não importa se `arr` tem 10 ou 1 milhão de itens → sempre 1 operação.

**Big-O: O(1)**

---

### 🔹 Exemplo 2: O(n) – linear

```js
function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
```

📌 Se o array dobra de tamanho, o tempo dobra.

**Big-O: O(n)**

---

### 🔹 Exemplo 3: O(n²) – quadrático (loop dentro de loop)

```js
function pares(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

📌 Para cada elemento, você percorre o array inteiro.

**Big-O: O(n²)**
⚠️ Pode ficar lento com entradas grandes.

---

### 🔹 Exemplo 4: O(log n) – busca binária

```js
function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (arr[meio] === alvo) return meio;
    if (arr[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }
  return -1;
}
```

📌 A cada passo, o problema é cortado pela metade.

**Big-O: O(log n)**

---

## 4️⃣ Regras rápidas para calcular Big-O

### ✔️ 1 loop → O(n)

```js
for (...) { ... }
```

### ✔️ 2 loops aninhados → O(n²)

```js
for (...) {
  for (...) { ... }
}
```

### ✔️ Loops consecutivos → soma → fica o maior

```js
O(n + n) → O(n)
```

### ✔️ Ignore constantes

```js
O(2n) → O(n)
O(100) → O(1)
```

---

## 5️⃣ Medir tempo real ≠ Big-O (mas ajuda)

Você pode medir tempo assim:

```js
console.time("teste");
somaArray(arrayGrande);
console.timeEnd("teste");
```

🟡 Isso **não substitui Big-O**, mas ajuda a comparar versões do código.

---

## 6️⃣ Quando usar Big-O

✅ Comparar duas soluções
✅ Pensar em escalabilidade
✅ Otimizar código lento
❌ Não é para micro-otimização
