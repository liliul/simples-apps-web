function LayoutImc() {
    return (`
        <div class="container">
            <h1>Calculadora de IMC</h1>
            <form id="imcForm">
                <label for="weight">Peso (kg):</label>
                <input type="number" id="weight" required>

                <label for="height">Altura (m):</label>
                <input type="number" step="0.01" id="height" required>

                <button type="submit">Calcular IMC</button>
            </form>
            <div id="result">
                <p id="imcValue"></p>
                <p id="category"></p>
            </div>
        </div>
    `)
}

export const html = {
    LayoutImc
}
