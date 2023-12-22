import atualizarDados from '../service/reqPUT.js';


const container = document.getElementById('container')
export async function editarDados(){
    const getApiEditarUser = await getDadosApi()
   
    container.addEventListener('click', (e) => {
        const editarDateset = e.target.dataset.editar

        if (editarDateset) {
            console.log(editarDateset)

            getApiEditarUser.users.filter(idNumber => {
            
            if(idNumber.id == editarDateset){
            
                container.innerHTML = `
                    <div class="modal">
                        <div class="modal-form">
                            <label for="idUpdate">id Update Usuario</label>
                            <input type="number" id="idUpdate" value="${editarDateset}" class="input-modal" readonly />

                            <label for="nameUp">Atualizar Usuario</label>
                            <input type="text" id="nameUp" class="input-modal" value="${idNumber.name}">

                            <label for="cityUp">Atualizar Cidade</label>
                            <input type="text" id="cityUp" class="input-modal" value="${idNumber.city}">

                            <label for="avatarUp">Atualizar do Avatar do Github</label>
                            <input type="text" id="avatarUp" class="input-modal" value="${idNumber.avatar}">

                            <button class="form-update" id="updateBut">update</button>
                        </div>
                    </div>
                `
           }
        })
            
            const updateBut = document.getElementById('updateBut');
            updateBut.addEventListener('click', () => {
                updateInterface()
                window.location = '/';
            });
        }

    })
}

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

async function getDadosApi() {
    const req = await fetch(`http://localhost:5500/api`)
    const res = await req.json()

    return res   
}