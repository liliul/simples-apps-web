import { userConfig } from '../config/config.js';

/**
 * @description ### codigo que mudo a cor vindo da config do usuario
 */

let txt  = "--bg-techs";
let lang = "--bg-lang";

document.documentElement.style.setProperty(txt, userConfig.textoCor);
document.documentElement.style.setProperty(lang, userConfig.textoCor);
