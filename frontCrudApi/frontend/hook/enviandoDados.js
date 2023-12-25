import enviarDados from '../service/reqPOST.js';

const idButtonForm = document.getElementById('buttonForm');
const idName = document.getElementById('name');
const idCity = document.getElementById('city');
const idAvatar = document.getElementById('avatar');

/**
 * @function 
 * @description EnviarDadosParaApi pega os valures dos inputs e enviar para o backend
 * */
export default function EnviarDadosParaApi() {

	idButtonForm.addEventListener('click', (e) => {
        e.preventDefault()
        
        const idsJson = {
            name: idName.value,
            avatar: idAvatar.value,
            city: idCity.value
        }

        console.log(idsJson)
        enviarDados(idsJson)

        window.location.reload()
    })
}