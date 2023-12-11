import renderizandoCardDados from '../hook/creandoCardDados.js';

const urlApiCrud = 'http://localhost:5500/api';

// Crie uma função para fazer uma requisição GET para buscar os dados do servidor:
export default function getDados() {
    fetch(urlApiCrud)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.users.forEach((itens) => {
              renderizandoCardDados(itens)
            })
        })
        .catch(error => console.error(error))
}
