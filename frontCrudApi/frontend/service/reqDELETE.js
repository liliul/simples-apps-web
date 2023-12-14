const urlApiCrud = 'http://localhost:5500/api';

// Crie uma função para deletar dados no servidor usando uma requisição DELETE:
export default window.deletarDados = function(id) {
    fetch(`${urlApiCrud}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('sdas',data);
            window.location.reload(true);
        })
        .catch(error => console.error(error))
}
