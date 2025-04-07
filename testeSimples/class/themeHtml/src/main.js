

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

            if (local) {
                body.classList.add('dark-theme')
                this.setLocalStorage('itens', 'dark-theme')
                body.classList.remove('light-theme')
            } else {
                body.classList.add('light-theme')
                this.setLocalStorage('itens', 'light-theme')
                body.classList.remove('dark-theme')
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
            
            document.querySelector('body').classList.remove('light-theme')
            
            document.querySelector('body').classList.add(checkThemeStorage)
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