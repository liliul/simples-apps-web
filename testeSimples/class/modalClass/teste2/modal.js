class Modal {
    modal(content) {
        // Overlay
        const overlay = document.createElement('div')
        overlay.classList.add('overlay')

        // Container do modal
        const containerModal = document.createElement('div')
        containerModal.classList.add('modal-container')

        // Botão fechar
        const closeBtn = document.createElement('button')
        closeBtn.textContent = '×'
        closeBtn.classList.add('close-btn')
        closeBtn.addEventListener('click', () => overlay.remove())

        containerModal.appendChild(closeBtn)

        // Conteúdo do modal
        if (typeof content === 'string') {
            containerModal.innerHTML += content
        } else {
            containerModal.appendChild(content)
        }

        overlay.appendChild(containerModal)
        document.getElementById('root').appendChild(overlay)

        // Força a animação (transition)
        setTimeout(() => overlay.classList.add('show'), 10)
    }
}

class ClientModal extends Modal {
    constructor() {
        super()
    }

    init() {
        this.modal(this.modalClient('Naruto', 'Anime japonês muito famoso!'))
    }

    modalClient(title, descriptions) {
        const html = document.createElement('div')

        html.innerHTML = `
            <h1>${title}</h1>
            <p>${descriptions}</p>
        `

        return html
    }
}

const clientModal = new ClientModal()
clientModal.init()
