const urlApiCrud = 'http://localhost:5500/api';

// Crie uma função para fazer uma requisição GET para buscar os dados do servidor:
function getDados() {
    fetch('url-do-servidor')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

// Crie uma função para enviar dados ao servidor usando uma requisição POST:
function enviarDados(dados) {
    fetch('url-do-servidor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}