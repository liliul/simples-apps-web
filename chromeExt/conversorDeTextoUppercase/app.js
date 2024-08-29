document.addEventListener('DOMContentLoaded', function (){

document.getElementById('root').innerHTML = `
   <input type="text" id="texto" name="">
	<button id="btn" >transformar</button>
	<div id="resultado"></div>
`;

document.querySelector('#btn').addEventListener('click', function(){
   let text	= document.querySelector('#texto').value;

   document.querySelector('#resultado').innerHTML = upper(text);
})	

function upper(text){
	return text.toUpperCase();
}


})