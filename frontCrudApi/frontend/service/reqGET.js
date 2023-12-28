// import renderizandoCardDados from '../component/creandoCardDados.js';

const urlApiCrud = 'http://localhost:5500/api';

// Crie uma função para fazer uma requisição GET para buscar os dados do servidor:
// export default function getDados() {
//     fetch(urlApiCrud)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)

//         })
//         .catch(error => console.error(error))
// }

export default async function getDados() {
    const req = await fetch(urlApiCrud);
    const res = await req.json();

    return res
}