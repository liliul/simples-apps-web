import { CalculandoImc } from './hook/calculoImc.js';
import { QualCategory } from './hook/category.js';

document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

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
});
