

class Theme {
    mudarThemeBasico() {

        const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme')
            body.classList.toggle('light-theme')
        });

        
    }

    mudarTemacomLocalStorage() {
        const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggleButton.addEventListener('click', () => {
          const local = body.classList.contains('light-theme')
            console.log(local);

            if (local) {
                body.classList.add('dark-theme')
                this.setLocalStorage('itens', 'dark-theme')
                body.classList.remove('light-theme')
            }

            if (!local) {
                body.classList.add('light-theme')
                this.setLocalStorage('itens', 'light-theme')
                body.classList.remove('dark-theme')
            }
            
        });

        
    }

    getLocalStorage(chave) {
        return JSON.parse(localStorage.getItem(chave) || null)
    }

    setLocalStorage(chave, value) {
        localStorage.setItem(chave, JSON.stringify(value))
    }
}

const theme = new Theme()
theme.mudarTemacomLocalStorage()

function checandoTema () {
    if (theme.getLocalStorage('itens')) {
        console.log(theme.getLocalStorage('itens'))

        document.querySelector('body').classList.remove('light-theme')
   
    }

    document.querySelector('body').classList.add(theme.getLocalStorage('itens'))
}

checandoTema()
