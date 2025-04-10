import { guardarNoLocalStorage } from './utils/setLocalStorage.js';

class Theme {
  constructor() {
    this.selec = document.querySelector('#select');
    this.root = document.documentElement;
  }

  iniciar() {
    window.addEventListener('DOMContentLoaded', this.getTheme.bind(this));
    this.selec.addEventListener('change', this.selected.bind(this));
  }

  getTheme() {
    const temaSalvo = localStorage.getItem('TempThemes');
  
    if (temaSalvo) {
      this.root.setAttribute('data-theme', temaSalvo);
  
      const op = document.createElement('option');
      op.selected = true;
      op.disabled = true;
      op.textContent = temaSalvo;
      op.style.color = 'green';
  
      this.selec.appendChild(op);
    }
  }

  selected() {
    const selectedOption = this.selec.options[this.selec.selectedIndex];
    const selectedText = selectedOption.text;
    const selectedString = selectedText.charAt(0).toLowerCase() + selectedText.slice(1)
  
    guardarNoLocalStorage('TempThemes', selectedString);
  
    this.root.setAttribute('data-theme', selectedString);
  }
}

 new Theme().iniciar()