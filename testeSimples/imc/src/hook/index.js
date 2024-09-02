import { CalculandoImc } from './calculoImc.js';
import { QualCategory } from './category.js';

function ImcScript() {
     // Obtém os valores dos inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Calcula o IMC
    const imc = CalculandoImc(weight, height);

    // Define a categoria
    let category = QualCategory(imc);

    // Exibe o resultado
    document.getElementById('imcValue').textContent = `Seu IMC é ${imc.toFixed(2)}`;
    document.getElementById('category').textContent = category;
}

export const imc = {
    ImcScript
}
