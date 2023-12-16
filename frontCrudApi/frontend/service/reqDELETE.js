const urlApiCrud = 'http://localhost:5500/api';

// Crie uma função para deletar dados no servidor usando uma requisição DELETE:
export default window.deletarDados = function(id) {
    fetch(`${urlApiCrud}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('sdas',data);
            // window.location.reload(true);
        })
        .catch(error => console.error(error))
}

const container = document.getElementById('container')

container.addEventListener('click', (e) => {
    let buttonDelete = e.target.dataset.remove;
    if (buttonDelete) {
        console.log(buttonDelete)

        const buttonDataset = document.querySelector(`[data-id="${buttonDelete}"]`)
        buttonDataset.remove()
    }
})