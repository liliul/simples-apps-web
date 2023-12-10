// Crie uma função para atualizar dados no servidor usando uma requisição PUT:
export default function atualizarDados(id, dados) {
    fetch(`${urlApiCrud}/${id}`, {
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
