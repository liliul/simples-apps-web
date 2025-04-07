class Theme {
    constructor() {
      this.chaveStorage = 'tema';
      this.root = document.documentElement;
      this.toggleButton = document.getElementById('theme-toggle');
    }
  
    iniciar() {
      this.aplicarTemaSalvo();
      this.toggleButton.addEventListener('click', () => this.trocarTema());
    }
  
    trocarTema() {
      const temaAtual = this.root.getAttribute('data-theme') || 'light';
      const novoTema = temaAtual === 'light' ? 'dark' : 'light';
      this.root.setAttribute('data-theme', novoTema);
      localStorage.setItem(this.chaveStorage, JSON.stringify(novoTema));
    }
  
    aplicarTemaSalvo() {
      const temaSalvo = JSON.parse(localStorage.getItem(this.chaveStorage)) || 'light';
      this.root.setAttribute('data-theme', temaSalvo);
    }
  }
  
  const theme = new Theme();
  theme.iniciar();
  