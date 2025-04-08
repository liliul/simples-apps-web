

class Theme {

    constructor() {
        this.body = document.body
    }

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

        themeToggleButton.addEventListener('click', () => {
          const local = this.body.classList.contains('light-theme')
            
            if (local) {
                this.body.classList.add('dark-theme')
                this.setLocalStorage('itens', 'dark-theme')
                this.body.classList.remove('light-theme')
            } else {
                this.body.classList.add('light-theme')
                this.setLocalStorage('itens', 'light-theme')
                this.body.classList.remove('dark-theme')
            }
            
        });
        
        this.checandoTema()
    }

    getLocalStorage(chave) {
        return JSON.parse(localStorage.getItem(chave) || null)
    }

    setLocalStorage(chave, value) {
        localStorage.setItem(chave, JSON.stringify(value))
    }

    checandoTema () {
        const checkThemeStorage = theme.getLocalStorage('itens')
    
        if (checkThemeStorage) {
            
            this.body.classList.remove('light-theme')
            
            this.body.classList.add(checkThemeStorage)
        }
        
    }
    
}

const theme = new Theme()
theme.mudarTemacomLocalStorage()

// function checandoTema () {
//     const checkThemeStorage = theme.getLocalStorage('itens')

//     if (checkThemeStorage) {
//         console.log(checkThemeStorage)

//         document.querySelector('body').classList.remove('light-theme')
   
//     }

//     document.querySelector('body').classList.add(theme.getLocalStorage('itens'))
// }

// checandoTema()

// document.querySelector('.theme-switcher').textContent = 'Tema Dark Light'.concat(' Theme').toUpperCase() 