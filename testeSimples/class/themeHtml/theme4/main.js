import { guardarNoLocalStorage } from './utils/setLocalStorage.js';

class DropdownTheme {
  constructor() {
    this.root = document.documentElement;
    this.button = document.querySelector('#dropdown-toggle');
    this.menu = document.querySelector('#theme-menu');
    this.dropdown = document.querySelector('.theme-dropdown');
  }

  iniciar() {
    this.aplicarTemaSalvo();
    this.button.addEventListener('click', () => {
      this.dropdown.classList.toggle('open');
    });

    this.menu.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      if (!li) return;

      const tema = li.dataset.theme;
      this.setarTema(tema);
      this.dropdown.classList.remove('open');
    });

    document.addEventListener('click', (e) => {
      if (!this.dropdown.contains(e.target)) {
        this.dropdown.classList.remove('open');
      }
    });
  }

  aplicarTemaSalvo() {
    const temaSalvo = localStorage.getItem('TempThemes');
    if (temaSalvo) {
      this.root.setAttribute('data-theme', temaSalvo);
      this.destacarAtivo(temaSalvo);
    }
  }

  setarTema(tema) {
    this.root.setAttribute('data-theme', tema);
    guardarNoLocalStorage('TempThemes', tema);
    this.destacarAtivo(tema);
  }

  destacarAtivo(tema) {
    [...this.menu.children].forEach(li => {
      li.classList.toggle('active-theme', li.dataset.theme === tema);
    });
  }
}

new DropdownTheme().iniciar();
