document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Calcula o IMC
    const imc = weight / (height * height);

    // Define a categoria
    let category;
    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc < 24.9) {
        category = 'Peso normal';
    } else if (imc < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    // Exibe o resultado
    document.getElementById('imcValue').textContent = `Seu IMC é ${imc.toFixed(2)}`;
    document.getElementById('category').textContent = category;
});
