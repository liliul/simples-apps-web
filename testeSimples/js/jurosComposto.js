function calcularJurosCompostos(P, r, t) {
    const M = P * Math.pow((1 + r / 100), t);
    return M;
}

const principal = 1310;
const taxaJuros = 5; 
const tempo = 3; 

const montanteFinal = calcularJurosCompostos(principal, taxaJuros, tempo);
console.log("Montante final: R$ " + montanteFinal.toFixed(2));
