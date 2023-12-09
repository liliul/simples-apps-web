export default function Card(id, avatar,name, login, index) {
    const sectionContainer = document.createElement('section')
    sectionContainer.classList.add('c-card')
    sectionContainer.setAttribute('data-id',`${id}`)

    sectionContainer.innerHTML = `
        
            <article class='name'>
                <img src='${avatar}' />
                <h1 class='h1'>${name}></h1>
                <h4 class='h4'>${login}</h4>
            </article>
            
            <div class='button'>
                <button onclick="deletarCard(${index})">Excluir</button>
            </div>
       
    `

    document.getElementById('container').appendChild(sectionContainer)
}
