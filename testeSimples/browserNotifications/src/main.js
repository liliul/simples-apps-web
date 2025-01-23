import Home from "./pages/home.js";
import ButtonNotification from "./pages/buttonNotification.js";
import ButtonCancelNotify from "./pages/buttonCancelNotify.js";

Home()
ButtonNotification()
ButtonCancelNotify()




document.getElementById('notify-button').addEventListener('click', () => {

    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            notify();
        } else {
            Notification.requestPermission().then((res) => {
                if (res === 'granted') {
                    notify();

                } else if (res === 'denied') {
                    console.log('Accesso negado denied')

                }else if(res === 'default')  {
                    console.log('Accesso negado default')
                }
            })
        }
    } else {
        console.log('Notification sem suporte')
    }

    function notify() {
    // new Notification("Naruto v Goku", {
    //     body: 'A batalha dos animes jopones Dragon Ball Z vs Naruto Shippuden.',
    //     icon: './src/assets/manjaro.png',
    //     vibrate: [200, 100, 200]
    // })

    const notification = new Notification("Naruto v Goku", {
        body: 'A batalha dos animes jopones Dragon Ball Z vs Naruto Shippuden.',
        icon: './src/assets/manjaro.png',
        vibrate: [200, 100, 200]
    })

    notification.addEventListener('click', () => {
        window.open('https://github.com/liliul');
    })

    setTimeout(() => { notification.close }, 3000)
}
})

// cancelar notificação
function noNotify() {
    /**
     * Infelizmente, não existe uma API que permita que você diretamente cancele a permissão de notificações do navegador via JavaScript.
     * 
     * Se a permissão de notificações já foi granted (concedida) uma vez, o navegador não vai mostrar a caixa de diálogo de permissão novamente. 
     * Isso é feito para evitar uma experiência ruim para o usuário, solicitando a permissão repetidamente, mesmo após ela já ter sido dada.
     */
    
    document.getElementById("cancel-button").addEventListener('click', () => {
        alert('Para desativar as notificações vai para as configurações do navegador') 
    })
}
noNotify()

