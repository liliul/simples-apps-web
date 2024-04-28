onmessage = function (e) {
    console.log(e.data);

    this.postMessage("Mesagem do worker");
}