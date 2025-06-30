const preco = 5310
const formato = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(preco)

console.log(formato);


const porcento = 0.5
const formatoPorcento = new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 1,
}).format(porcento)

console.log(formatoPorcento);


const compact = 1500
const formatoCompact = new Intl.NumberFormat('en-US', {
    notation: 'compact',
}).format(compact)

console.log(formatoCompact);
