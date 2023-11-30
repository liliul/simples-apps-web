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

// Crie uma função para atualizar dados no servidor usando uma requisição PUT:
function atualizarDados(id, dados) {
    fetch(`url-do-servidor/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

// Crie uma função para deletar dados no servidor usando uma requisição DELETE:
function deletarDados(id) {
    fetch(`url-do-servidor/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}


// Busca os dados do servidor
getDados()

// Envia novos dados para o servidor
enviarDados({ nome: 'João', idade: 25 })

// Atualiza os dados do servidor com id = 1
atualizarDados(1, { nome: 'Maria', idade: 30 })

// Deleta os dados do servidor com id = 2
deletarDados(2)