import { html } from './components/layoutImc.js';
import { imc } from './hook/index.js';

document.getElementById('root').innerHTML = `${html.LayoutImc()}`;

document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

   imc.ImcScript();
});
