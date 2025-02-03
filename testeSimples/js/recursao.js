const recursaoFatorial = (numero) => {
    console.log(numero);
    
    if (numero == 1) {
        return 1
    }

    return numero * recursaoFatorial(numero - 1)
}

console.log(recursaoFatorial(5))


console.log('----------------------------------------------------------------------')



function removeDuplicadosRecursivamente(arr) {
  if (arr.length === 0) {
    return [];
  }

  const [head, ...tail] = arr;
  const remaining = removeDuplicadosRecursivamente(tail);

  return [...new Set([head, ...remaining])];
}

// Exemplo de uso:
const arrayComDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arraySemDuplicados = removeDuplicadosRecursivamente(arrayComDuplicados);
console.log(arraySemDuplicados); // Output: [1, 2, 3, 4]