const recursaoFatorial = (numero) => {
    console.log(numero);
    
    if (numero == 1) {
        return 1
    }

    return numero * recursaoFatorial(numero - 1)
}

console.log(recursaoFatorial(5))