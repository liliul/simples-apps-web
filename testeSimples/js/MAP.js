const mapeando = new Map() 

const s = mapeando.set('Goku', {nome: 'Som Goku', type: 'Sayajins'})
const h = mapeando.has('Goku')
const g = mapeando.get('Goku')
const d = mapeando.delete('Goku')

console.log(s, h, g, d);
