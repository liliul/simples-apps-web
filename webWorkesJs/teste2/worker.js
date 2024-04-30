self.addEventListener('message', (event) => {
    self.postMessage('Messagem recebida: ' + event.data);
})
