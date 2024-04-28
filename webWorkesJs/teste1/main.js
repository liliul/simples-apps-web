const myWorker = new Worker("./worker.js");

myWorker.postMessage("Mensagem do main loop");
myWorker.onmessage = function (e) {
    console.log(e.data);
}