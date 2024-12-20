import getDados from '../service/reqGET.js';
import updateInterface from '../hook/atualizandoDados.js';

/**
 * @function
 * @returns Editar usuario 
 * @description componente que seleciona id e edita usuario 
 * */
const container = document.getElementById('container')
export async function editarDados(){
    const getApiEditarUser = await getDados()
   
    container.addEventListener('click', (e) => {
        const editarDateset = e.target.dataset.editar

        if (editarDateset) {
            console.log(editarDateset)

            // getApiEditarUser.users.filter
            getApiEditarUser.filter(idNumber => {
            
            if(idNumber.id == editarDateset){
                
                const htmlModal = document.createElement('section');
                htmlModal.classList.add('containerModal');

                htmlModal.innerHTML = `
                    <div class="modal">
                        <span class="b-close">X</span>
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
                `;

                container.appendChild(htmlModal);
           }
        })
            const containerModal = document.querySelector('.containerModal')
            containerModal.addEventListener('click', (event) => {
                const clicandoNaClassName = event.target.classList[0];

                const className = ['b-close','containerModal'];
                
                const qualClassNameFoiClicada = className.some(className => className === clicandoNaClassName);  
                
                if(qualClassNameFoiClicada){
                    containerModal.remove();
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
