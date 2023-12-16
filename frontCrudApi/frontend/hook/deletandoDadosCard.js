import deletarDados from '../service/reqDELETE.js';

const container = document.getElementById('container')

container.addEventListener('click', (e) => {
    let buttonDelete = e.target.dataset.remove;
    if (buttonDelete) {
        console.log(buttonDelete)

        const buttonDataset = document.querySelector(`[data-id="${buttonDelete}"]`)
        buttonDataset.remove()
        deletarDados(buttonDelete)
    }
})