import { guardarNoLocalStorage } from './utils/setLocalStorage.js';

const selec = document.querySelector('#select');
const root = document.documentElement;

window.addEventListener('DOMContentLoaded', getTheme);

function getTheme() {
  const temaSalvo = localStorage.getItem('TempThemes');

  if (temaSalvo) {
    root.setAttribute('data-theme', temaSalvo);

    const op = document.createElement('option');
    op.setAttribute('selected', '');
    op.setAttribute('disabled', '');
    op.textContent = temaSalvo;
    op.style.color = 'green';

    selec.appendChild(op);
  }
}

selec.addEventListener('change', selected);

function selected() {
  const selectedOption = selec.options[selec.selectedIndex];
  const selectedText = selectedOption.text;
  const selectedString = selectedText.charAt(0).toLowerCase() + selectedText.slice(1)

  guardarNoLocalStorage('TempThemes', selectedString);

  root.setAttribute('data-theme', selectedString);
}
