const worker = new Worker('worker.js');

worker.addEventListener('message', (event) => {
    document.querySelector('.important').innerHTML += `
        Resposta do web Worker -> ${event.data} <br>
    `;
})

let num = 1;

const mensagem = () => {
    worker.postMessage(`${num++} : TESTANDO WEB WORKER`);
}

worker.postMessage('Ola eu sou um web workers');
