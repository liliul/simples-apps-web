const containerDiv = document.getElementById('container');

export default function renderizandoCardDados(itens) {
	const divCardInfos = document.createElement('section');
    divCardInfos.classList.add('card');
    divCardInfos.setAttribute('data-id', `${itens.id}`);

    divCardInfos.innerHTML = `
        <h1 class="name">${itens.name}</h1>
        <h3 class="city">${itens.city}</h3>
        <b class="id">${itens.id}</b>

        <br />

        <img src="${itens.avatar}" class="avatar" />

        <br />

        <button onclick="deletarDados(${itens.id})" class="b-deletar">Deletar</button>
    `;

    containerDiv.appendChild(divCardInfos);
}