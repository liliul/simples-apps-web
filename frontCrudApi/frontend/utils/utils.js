export function ButtonTxt(){
    return (`
        <b>Comfirmar Update</b>
    `)
}

import atualizarDados from '../service/reqPUT.js';


const container = document.getElementById('container')
export async function editarDados(){
    const getApiEditarUser = await getDadosApi()
   
    container.addEventListener('click', (e) => {
        const editarDateset = e.target.dataset.editar

        if (editarDateset) {
            console.log(editarDateset)

            getApiEditarUser.users.filter(i => {
            
            if(i.id == editarDateset){
            
                container.innerHTML = `
                    <div class="modal">
                        <div class="modal-form">
                            <label for="idUpdate">id Update Usuario</label>
                            <input type="number" id="idUpdate" value="${editarDateset}" class="input-modal" readonly />

                            <label for="nameUp">Atualizar Usuario</label>
                            <input type="text" id="nameUp" class="input-modal" value="${i.name}">

                            <label for="cityUp">Atualizar Cidade</label>
                            <input type="text" id="cityUp" class="input-modal" value="${i.city}">

                            <label for="avatarUp">Atualizar do Avatar do Github</label>
                            <input type="text" id="avatarUp" class="input-modal" value="${i.avatar}">

                            <button class="form-update" id="updateBut">update</button>
                        </div>
                    </div>
                `
           }
        })
            
            

            const updateBut = document.getElementById('updateBut');
            updateBut.addEventListener('click', () => {
                updateInterface()
                window.location.reload()
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

    // const fil = (name) => {
    //     return name.id === 2
    // }
    // const resulfil = res.users.filter(i => i.id === dataset)
    
    // return console.log(resulfil) 
    return res
    
}
// getDadosApi()

// dados para teste 
// const dados = {
//     name: "Mayk Brito",
//     avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
//     city: "Parana"
// }

// const naruto = {
//     name: "Sasuke Uchiha",
//     avatar: "https://avatars.githubusercontent.com/u/2254731?v=5",
//     city: "Vila da folha"
// }

// const gaku = {
//     name: "Som Goku",
//     avatar: "https://avatars.githubusercontent.com/u/2254731?v=5",
//     city: "Terra"
// }

// const itachi = {
//     name: "Itachi Uchiha",
//     avatar: "https://avatars.githubusercontent.com/u/2254731?v=5",
//     city: "Akatsuki"
// }

// Busca os dados do servidor
// getDados()

// Envia novos dados para o servidor
// enviarDados(gaku)

// Atualiza os dados do servidor com id = 1
// atualizarDados(5, itachi)

// Deleta os dados do servidor com id = 2
// deletarDados(5)
