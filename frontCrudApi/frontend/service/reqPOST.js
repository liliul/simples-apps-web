// Crie uma função para enviar dados ao servidor usando uma requisição POST:
export default function enviarDados(dados) {
    fetch(urlApiCrud, {
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
