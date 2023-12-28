import getDados from '../service/reqGET.js';
import renderizandoCardDados from '../component/creandoCardDados.js';

export default async function renderCards() {
	const data = await getDados();
	console.log('aa', data)
	data.users.forEach((itens) => {
      renderizandoCardDados(itens)
    })
}