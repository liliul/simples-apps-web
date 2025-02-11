/**
 * 1. Implementação Básica (Iterativa)
 * Este método usa um loop para calcular os termos da sequência até um determinado índice n.
 * 
 * Explicação:

    n = 0: Retorna 0.

    n = 1: Retorna 1.

    n > 1: Calcula iterativamente até o termo desejado
 * */

function fibonacciIterativo(n) {
  if (n < 0) return "Número inválido";
  if (n === 0) return 0;
  
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacciIterativo(10)); 



/**
 * 2. Implementação Recursiva
  Método clássico, mas ineficiente para valores grandes devido à repetição de cálculos.
  
  Problema:
  A complexidade é exponencial (O(2^n)), tornando-o inviável para n > 40.

 * 
 * */

function fibonacciRecursivo(n) {
  if (n < 0) return "Número inválido";
  if (n <= 1) return n;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

console.log(fibonacciRecursivo(10));



/**
 * 3. Implementação com Memoização (Otimização)
Usa um objeto para armazenar resultados já calculados, melhorando a eficiência da recursão.

Vantagem:
Complexidade reduzida para O(n).
 * */

const memo = {};

function fibonacciMemo(n) {
  if (n < 0) return "Número inválido";
  if (n <= 1) return n;
  
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  return memo[n];
}

console.log(fibonacciMemo(50));



/**
 * 
 * 4. Gerar Sequência Completa
  Retorna um array com todos os termos até o índice n.
 * */

function gerarSequenciaFibonacci(n) {
  const sequencia = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }
  
  return sequencia.slice(0, n + 1);
}

console.log(gerarSequenciaFibonacci(10));





/**
 * 5. Comparação de Métodos
  Método  Complexidade  Uso Recomendado
  Iterativo O(n)  Valores grandes (n > 1000)
  Recursivo O(2^n)  Apenas para estudo
  Memoização  O(n)  Valores médios e grandes
  Gerar sequência O(n)  Quando precisa de todos os termos

 * 
 * 
 * */