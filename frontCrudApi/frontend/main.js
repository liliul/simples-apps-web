// import updateInterface from './hook/atualizandoDados.js';
import EnviarDadosParaApi from './hook/enviandoDados.js';
import renderCardDados from './service/reqGET.js';
// import DeletarCardDados from './service/reqDELETE.js';
import './service/reqDELETE.js';
import './component/buttonAtualizar.js';

// import {ButtonTxt} from './utils/utils.js';

const urlApiCrud = 'http://localhost:5500/api';
// const containerDiv = document.getElementById('container');

// inputs
// const idForm = document.getElementById('idForm');
// // const idButtonForm = document.getElementById('buttonForm');
// const idButtonUpdate = document.getElementById('buttonUpdate');
// const idName = document.getElementById('name');
// const idCity = document.getElementById('city');
// const idAvatar = document.getElementById('avatar');

EnviarDadosParaApi()
renderCardDados();

// DeletarCardDados()

// idButtonUpdate.addEventListener('click', (e) => {
//     e.defaultPrevented

//     idForm.innerHTML = `
//         <label for="idUpdate">id Update Usuario</label>
//         <input type="number" id="idUpdate">

//         <label for="nameUp">Atualizar Usuario</label>
//         <input type="text" id="nameUp" >

//         <label for="cityUp">Atualizar Cidade</label>
//         <input type="text" id="cityUp" >

//         <label for="avatarUp">Atualizar do Avatar do Github</label>
//         <input type="text" id="avatarUp" >

//         <button class="form-update" id="updateBut">${ButtonTxt()}</button>
//     `;

//     const updateBut = document.getElementById('updateBut');
//     updateBut.addEventListener('click',updateInterface);
    
// })


// function updateInterface() {
//     const idNameUp   = document.getElementById('nameUp');
//     const idCityUp   = document.getElementById('cityUp');
//     const idAvatarUp = document.getElementById('avatarUp');
//     const idUpdate = document.getElementById('idUpdate');

//     const idsJson  = {
//         name: idNameUp.value,
//         avatar: idAvatarUp.value,
//         city: idCityUp.value
//     }
//     console.log(idsJson, idUpdate.valueAsNumber)
//     atualizarDados(idUpdate.valueAsNumber, idsJson)
// }

// Crie uma função para fazer uma requisição GET para buscar os dados do servidor:
// function getDados() {
//     fetch(urlApiCrud)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)

//             data.users.forEach((itens) => {
//                 renderizandoCardDados(itens);
//             })
//         })
//         .catch(error => console.error(error))
// }

// Crie uma função para enviar dados ao servidor usando uma requisição POST:
// function enviarDados(dados) {
//     fetch(urlApiCrud, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dados)
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// }

// Crie uma função para atualizar dados no servidor usando uma requisição PUT:
// function atualizarDados(id, dados) {
//     fetch(`${urlApiCrud}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dados)
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// }

// Crie uma função para deletar dados no servidor usando uma requisição DELETE:
// window.deletarDados = function(id) {
//     fetch(`${urlApiCrud}/${id}`, {
//         method: 'DELETE'
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// }