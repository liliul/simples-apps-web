import Home from "./pages/home.js";

Home()


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
