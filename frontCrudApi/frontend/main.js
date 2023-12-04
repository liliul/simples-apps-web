const urlApiCrud = 'http://localhost:5500/api';
const containerDiv = document.getElementById('container');

// Crie uma função para fazer uma requisição GET para buscar os dados do servidor:
function getDados() {
    fetch(urlApiCrud)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.users.forEach((itens) => {

                const divCardInfos = document.createElement('section');
                divCardInfos.classList.add('card');
                divCardInfos.setAttribute('data-id', `${itens.id}`);

                divCardInfos.innerHTML = `
                    <h1 class="name">${itens.name}</h1>
                    <h3 class="city">${itens.city}</h3>
                    <b class="id">${itens.id}</b>

                    <br />

                    <img src="${itens.avatar}" class="avatar" />

                    <br />

                    <button onclick="deletarDados(${itens.id})" class="b-deletar">Deletar</button>
                `;

                containerDiv.appendChild(divCardInfos);
            })
        })
        .catch(error => console.error(error))
}

// Crie uma função para enviar dados ao servidor usando uma requisição POST:
function enviarDados(dados) {
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

// Crie uma função para atualizar dados no servidor usando uma requisição PUT:
function atualizarDados(id, dados) {
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

// Crie uma função para deletar dados no servidor usando uma requisição DELETE:
function deletarDados(id) {
    fetch(`${urlApiCrud}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}


const dados = {
    name: "Mayk Brito",
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
    city: "Parana"
}

const naruto = {
    name: "Sasuke Uchiha",
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=5",
    city: "Vila da folha"
}

const gaku = {
    name: "Som Goku",
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=5",
    city: "Terra"
}

const itachi = {
    name: "Itachi Uchiha",
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=5",
    city: "Akatsuki"
}

// Busca os dados do servidor
getDados()

// Envia novos dados para o servidor
// enviarDados(gaku)

// Atualiza os dados do servidor com id = 1
// atualizarDados(5, itachi)

// Deleta os dados do servidor com id = 2
// deletarDados(5)
