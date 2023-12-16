import updateInterface from '../hook/atualizandoDados.js';
import {ButtonTxt} from '../utils/utils.js';

const idForm = document.getElementById('idForm');
const idButtonUpdate = document.getElementById('buttonUpdate');

export default idButtonUpdate.addEventListener('click', (e) => {
    e.preventDefault()

    idForm.innerHTML = `
        <label for="idUpdate">id Update Usuario</label>
        <input type="number" id="idUpdate">

        <label for="nameUp">Atualizar Usuario</label>
        <input type="text" id="nameUp" >

        <label for="cityUp">Atualizar Cidade</label>
        <input type="text" id="cityUp" >

        <label for="avatarUp">Atualizar do Avatar do Github</label>
        <input type="text" id="avatarUp" >

        <button class="form-update" id="updateBut">${ButtonTxt()}</button>
    `;

    const updateBut = document.getElementById('updateBut');
    updateBut.addEventListener('click',updateInterface);
    
})