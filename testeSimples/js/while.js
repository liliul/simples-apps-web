/**
 * do...while Garante que o bloco será executado pelo menos uma vez, mesmo que a condição seja falsa no início.
 * 
 */

// let i = 0;
// do {
//   console.log("Executa pelo menos uma vez:", i);
//   i++;
// } while (i < 3);


// let contador = 0;
// console.log('inicio', contador);

// while (true) {
//   console.log("Contando:", contador);
//   if (contador >= 5) break; 
//   contador++;
// }

// console.log('fim', contador);








// Número secreto entre 1 e 10
// const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// let chute = null;

// // Enquanto o número chutado não for o correto, continue perguntando
// while (chute !== numeroSecreto) {
//   chute = parseInt(prompt("Adivinhe o número (entre 1 e 10):"));

//   if (chute === numeroSecreto) {
//     alert("🎉 Parabéns! Você acertou!");
//   } else {
//     alert("❌ Errado! Tente novamente.");
//   }
// }










const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function perguntar() {
  rl.question("Adivinhe o número (1-10): ", (resposta) => {
    const chute = parseInt(resposta);

    if (chute === numeroSecreto) {
      console.log("🎉 Acertou!");
      rl.close();
    } else {
      console.log("❌ Errado! Tente novamente.");
      perguntar();
    }
  });
}

perguntar();
