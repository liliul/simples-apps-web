class Mensagem {
    constructor(msg) {
        this.msg = msg
        // this.section = null;
    }

    htmlMsg() {
        const section = document.createElement('section')
        section.classList.add('container')

        section.innerHTML = (`
            <div class="c-msg">
                <h1 class="c-h1">${this.msg}</h1>
            </div>    
        `)

        // this.section = section;
        document.querySelector('body').appendChild(section)
    }
}

class html extends Mensagem {
    constructor(msg) {
        super(msg)
    }

    render() {
        this.htmlMsg()
    }
}

const msg = new html('Mesagem enviada com sucesso!!')
// msg.render()

// 

class Button {
    buttonOpen() {
        const button = document.createElement('button')
        button.setAttribute('id', 'b-open')
        button.classList.add('msg-button')
        button.textContent = 'Open'

        document.getElementById('buttons').appendChild(button)
    }

    buttonClose() {
        const button = document.createElement('button')
        button.setAttribute('id', 'b-close')
        button.classList.add('msg-button')
        button.textContent = 'Close'

        document.getElementById('buttons').appendChild(button)
    }
}

const but = new Button()
but.buttonOpen()
but.buttonClose()

//

class ChamandoOpenClose {
    Open() {
        document.getElementById('b-open').addEventListener('click', (e) => {
            msg.render()
        })
    }

    Close() {
        document.getElementById('b-close').addEventListener('click', (e) => {
            document.querySelector('.container').remove()
        
            // if (msg.section) {
            //     msg.section.remove()
            // }
        })
    }
}

const chamar = new ChamandoOpenClose()
chamar.Open()
chamar.Close()