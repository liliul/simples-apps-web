// cria data e hora atual

const criandoDataHoraAtual = new Date()
console.log(criandoDataHoraAtual);

// criando data manualmente // ano, mês (0-11), dia
const criandoDataManualmente = new Date(2026, 3, 30)
console.log(criandoDataManualmente);

// pegando partes da data
const pegandoPartesDaData = new Date();

console.log(pegandoPartesDaData.getFullYear()); // ano
console.log(pegandoPartesDaData.getMonth());    // mês (0-11)
console.log(pegandoPartesDaData.getDate());     // dia do mês
console.log(pegandoPartesDaData.getDay());      // dia da semana (0-6)
console.log(pegandoPartesDaData.getHours());   // horas
console.log(pegandoPartesDaData.getMinutes()); // minutos
console.log(pegandoPartesDaData.getSeconds()); // segundos

// formatando data manual
const formatandoDataManual = new Date();

const dia = formatandoDataManual.getDate();
const mes = formatandoDataManual.getMonth() + 1;
const ano = formatandoDataManual.getFullYear();

console.log(`${dia}/${mes}/${ano}`);

// timestamp
// Cada data em JS é baseada em milissegundos desde 1970
const timestamp = Date.now();
console.log(timestamp);

// dirença em datas
const inicio = new Date("2026-01-01");
const fim = new Date("2026-12-31");
console.log('inicio: ', inicio, 'fim: ', fim);

const diferenca = fim - inicio;
console.log('diferença: ', diferenca);

const dias = diferenca / (1000 * 60 * 60 * 24);

console.log(dias);

// somando dias em uma data
const somandoDiasEmUmaData = new Date();

somandoDiasEmUmaData.setDate(somandoDiasEmUmaData.getDate() + 7);

console.log(somandoDiasEmUmaData);

// intervalos
// setInterval(() => {
//     console.log("Executando...");
// }, 1000);

// setTimeout(() => {
//     console.log("Executou depois de 3 segundos");
// }, 3000);

// formatação moderna
const formatacaoModerna = new Date();

console.log(formatacaoModerna.toLocaleDateString("pt-BR"));
console.log(formatacaoModerna.toLocaleTimeString("pt-BR"));

console.log(
    'mais mordeno: ',
    formatacaoModerna.toLocaleString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);

console.log('------------------------------------------------------------------');

function quantosDiasParaProximoAno() {
    const dataAtual = new Date()
    const quantoDiasAno = new Date(dataAtual.getFullYear() + 1, 0, 1)
    console.log('quantoDiasAno: ', quantoDiasAno);

    const normalizar = quantoDiasAno - dataAtual

    const diasFaltando = normalizar / (1000 * 60 * 60 * 24)

    console.log(Math.ceil(diasFaltando))
}

quantosDiasParaProximoAno()
