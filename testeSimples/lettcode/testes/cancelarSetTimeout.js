function cancelarSetTimeout() {
  let timeout;

  function iniciarProcesso() {
    timeout = setTimeout(() => console.log('Processo completo!'), 5000);
  }

  function cancelarProcesso() {
    clearTimeout(timeout);
    console.log('Processo cancelado!');
  }

  return { cancelarProcesso, iniciarProcesso }
}

const instaciandoFunction = cancelarSetTimeout()

instaciandoFunction.iniciarProcesso()
setTimeout(() => {
  instaciandoFunction.cancelarProcesso()
}, 1000)


// let timeout;

// function iniciarProcesso() {
//   timeout = setTimeout(() => console.log('Processo completo!'), 5000);
// }

// function cancelarProcesso() {
//   clearTimeout(timeout);
//   console.log('Processo cancelado!');
// }

// iniciarProcesso()
// setTimeout(() => {
//   cancelarProcesso()
// }, 1000)