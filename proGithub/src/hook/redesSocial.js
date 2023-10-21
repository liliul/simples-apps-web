import { userConfig } from '../config/config.js';

/**
 * @function 
 * @type {string}
 * @description template html das redes sociais dinamicamente vindo das congif do usuario 
*/

const redesSocial = () => {
    return (`
        <div class="icons">
            ${userConfig.redeSocial}
        </div>
    `)
}

export default redesSocial;