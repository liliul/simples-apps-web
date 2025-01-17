const mapeando = new Map() 

const s = mapeando.set('Goku', {nome: 'Som Goku', type: 'Sayajins'})
const h = mapeando.has('Goku')
const g = mapeando.get('Goku')
const d = mapeando.delete('Goku')

console.log(s, h, g, d);

console.log('----------------------------------------------------------');

const ns = mapeando.set('Naruto', {nome: 'Naruto Uzumaki', type: 'Shinobi'})

console.log(ns);

console.log('-----------------------------------------------------------');

const vs = mapeando.set('Vegeta', {nome: 'Vegeta', type: 'Sayajins'})
const vd = mapeando.delete('Vegeta')
console.log(vs, vd);

