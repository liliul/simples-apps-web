/**
 * @description ### Aqui fica as configurações do protifolio
*/

const githubUser = 'diego3g';


/**
 * @const
 * @type {strig} skills
 * @description Skills de tecnologia do header
 * 
 * // criar tecnoligia
 * <div class="item-skills">
    <p>javascript</p>
   </div>
 */

const skillsTech = `
	<div class="item-skills">
        <p>javascript</p>
    </div>
    <div class="item-skills">
        <p>html</p>
    </div>
    <div class="item-skills">
        <p>css</p>
    </div>
    <div class="item-skills">
        <p>nodejs</p>
    </div>
    <div class="item-skills">
        <p>git</p>
    </div>
    <div class="item-skills">
        <p>reactnative</p>
    </div>
    <div class="item-skills">
        <p>react</p>
    </div>
    <div class="item-skills">
        <p>github</p>
    </div>
    <div class="item-skills">
        <p>sass</p>
    </div>
`;


/**
 * @const
 * @type {string} redeSocial
 * @description html das redes sociais footer
 * 
 * <a href="#">
        <div class="icon-img">
            <img src="./assets/linkedin.svg" >
        </div>
    </a>
 */

const redeSocial = `
    <a href="#">
        <div class="icon-img">
            <img src="./assets/linkedin.svg" >
        </div>
    </a>

    <a href="#">
        <div class="icon-img">
            <img src="./assets/whatsapp.svg" >
        </div>
    </a>

    <a href="#">
        <div class="icon-img">
            <img src="./assets/instagram.svg" >
        </div>
    </a>
    
    <a href="#">
        <div class="icon-img">
            <img src="./assets/mail.svg" >
        </div>
    </a>
`;


/**
 * @constant
 * @type {string} textoCor
 * @description variavel com a cor que muda a cor do texto com setProperty
 */
const textoCor     = "#75D7EC";
const cardHoverCor = "#75D7EC";


/**
 * @const 
 * @type {object} userConfig
 * @description ### exportando configurações do usuario
*/
export const userConfig = {
    githubUser,
    skillsTech,
    redeSocial,
    textoCor,
    cardHoverCor
}
