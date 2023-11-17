import { userConfig } from '../config/config.js';

/**
 * @description ### codigo que mudo a cor vindo da config do usuario
 */

let txt = "--bg-techs"

document.documentElement.style.setProperty(txt, userConfig.textoCor);