class Mensagem {
    constructor(msg) {
        this.msg = msg
        // this.section = null;

    }

    htmlMsg() {
        // const checkMsg = document.querySelector('.container');
        // if (checkMsg) {
        //     checkMsg.remove();
        // }
        
        const section = document.createElement('section')
        section.classList.add('container')

        section.innerHTML = (`
            <div class="c-msg">
                <button class="b-close">X</button>
                <h1 class="c-h1">${this.msg}</h1>
            </div>    
        `)

        // this.section = section;
        document.querySelector('body').appendChild(section)

        // chamando ButClose de Button static
        Button.butClose(section)
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

    static butClose(section) {
        const closeButton = section.querySelector('.b-close')
        console.log(section)
        console.log(closeButton);
        
        
        closeButton.addEventListener('click', () => {
            section.remove()
            console.log('m');
            
        });
    }
    // static butClose() {
    //     const button = document.createElement('button')
    //     button.setAttribute('id', 'close')
    //     button.classList.add('b-close')
    //     button.textContent = 'X'

    //     document.querySelector('.c-msg').appendChild(button)

    //     document.querySelector('.container').addEventListener('click', (e) => {
    //         // <button id="close" class="b-close">X</button>
    //         console.log(e.target.remove());
            

    //         document.querySelector('.container').remove()
        
    //         // if (msg.section) {
    //         //     msg.section.remove()
    //         //     console.log('msg');
                
    //         // }
    //     })
    // }
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
