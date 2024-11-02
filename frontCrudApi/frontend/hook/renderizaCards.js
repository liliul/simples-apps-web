import getDados from '../service/reqGET.js';
import renderizandoCardDados from '../component/creandoCardDados.js';

/**
 * @function
 * @returns {string} cards rederizados no html com dados do reqGET
 * 
 * @description renderCards renderiza cards com dados da feature getDados  
 * */
export default async function renderCards() {
  const isdata = await getDados();

  // isdata.users.forEach((itens) => {
  //   renderizandoCardDados(itens)
  // })

  isdata.forEach((itens) => {
    renderizandoCardDados(itens)
  })
}
