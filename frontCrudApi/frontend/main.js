import EnviarDadosParaApi from './hook/enviandoDados.js';
// import renderCardDados from './service/reqGET.js';
import renderCards from './hook/renderizaCards.js';

import './hook/deletandoDadosCard.js';
import './component/buttonAtualizar.js';

EnviarDadosParaApi()
// renderCardDados();
renderCards()

import {editarDados} from './component/buttonEditar.js'

editarDados()