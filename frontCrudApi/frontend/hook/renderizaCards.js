import getDados from '../service/reqGET.js';
import renderizandoCardDados from '../component/creandoCardDados.js';

export default async function renderCards() {
	const isdata = await getDados();
	
	isdata.users.forEach((itens) => {
      renderizandoCardDados(itens)
    })
}