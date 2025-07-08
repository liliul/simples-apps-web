function dividirComVirgula(dividendo, divisor) {
    
    let resultado = dividendo / divisor;
    
    let resultadoComVirgula = resultado.toString().replace('.', ',');
    
    return resultadoComVirgula;
}

console.log(dividirComVirgula(10, 3));
