import enviarDados from '../service/reqPOST.js';

const idButtonForm = document.getElementById('buttonForm');
const idName = document.getElementById('name');
const idCity = document.getElementById('city');
const idAvatar = document.getElementById('avatar');

export default function EnviarDadosParaApi() {

	idButtonForm.addEventListener('click', (e) => {

        const idsJson = {
            name: idName.value,
            avatar: idAvatar.value,
            city: idCity.value
        }

        console.log(idsJson)
        enviarDados(idsJson)
    })
}