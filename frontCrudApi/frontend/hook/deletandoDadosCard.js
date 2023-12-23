import deletarDados from '../service/reqDELETE.js';

const container = document.getElementById('container')

/**
 * @description hook que deleta usuario do frontend e api
 * */
container.addEventListener('click', (e) => {
    const buttonDelete = e.target.dataset.remove;
    if (buttonDelete) {
        console.log(buttonDelete)

        setTimeout(() => {
            const buttonDataset = document.querySelector(`[data-id="${buttonDelete}"]`)
            buttonDataset.remove()
            deletarDados(buttonDelete)
        }, 800)
        
    }
})