/**
 * Arquivo Principal
 * 
 * @description Import global features  
 * */

import EnviarDadosParaApi from './hook/enviandoDados.js';
import renderCards from './hook/renderizaCards.js';

import './hook/deletandoDadosCard.js';
import './component/buttonAtualizar.js';

EnviarDadosParaApi();
renderCards();

import {editarDados} from './component/buttonEditar.js';

editarDados();