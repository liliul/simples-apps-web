class Theme {
    constructor() {
        this.chaveStorage = 'tema';
        this.body = document.body;
        this.themeToggleButton = document.getElementById('theme-toggle');
    }

    iniciar() {
        this.aplicarTemaSalvo();
        this.themeToggleButton.addEventListener('click', () => this.trocarTema());
    }

    trocarTema() {
        const temaAtual = this.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        const novoTema = temaAtual === 'light-theme' ? 'dark-theme' : 'light-theme';

        this.body.classList.replace(temaAtual, novoTema);
        this.setLocalStorage(this.chaveStorage, novoTema);
    }

    aplicarTemaSalvo() {
        const temaSalvo = this.getLocalStorage(this.chaveStorage) || 'light-theme';
        this.body.classList.remove('light-theme', 'dark-theme');
        this.body.classList.add(temaSalvo);
    }

    getLocalStorage(chave) {
        return JSON.parse(localStorage.getItem(chave));
    }

    setLocalStorage(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    }
}

const theme = new Theme();
theme.iniciar();
