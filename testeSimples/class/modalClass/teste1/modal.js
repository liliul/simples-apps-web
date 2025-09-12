class Modal {
    modal(content) {
        const containerModal = document.createElement('div')
        containerModal.classList.add('container')
        
        // containerModal.innerHTML = `
        //     ${functions}
        // `

         if (typeof content === 'string') {
            containerModal.innerHTML = content
        } else {      
            containerModal.appendChild(content)
        }

        document.getElementById('root').appendChild(containerModal)
    }
}

class ClientModal extends Modal {
    constructor() {
        super()
    }

    init() {
        this.modal(this.modalClient('naruto', 'anime japones'))
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