import atualizarDados from '../service/reqPUT.js';

export default function updateInterface() {
    const idNameUp   = document.getElementById('nameUp');
    const idCityUp   = document.getElementById('cityUp');
    const idAvatarUp = document.getElementById('avatarUp');
    const idUpdate = document.getElementById('idUpdate');

    const idsJson  = {
        name: idNameUp.value,
        avatar: idAvatarUp.value,
        city: idCityUp.value
    }
    console.log(idsJson, idUpdate.valueAsNumber)
    atualizarDados(idUpdate.valueAsNumber, idsJson)
}