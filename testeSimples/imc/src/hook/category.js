export function QualCategory(imc) {

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 24.9) {
            return 'Peso normal';
        } else if (imc < 29.9) {
            return 'Sobrepeso';
        } else {
            return 'Obesidade';
        }
}
