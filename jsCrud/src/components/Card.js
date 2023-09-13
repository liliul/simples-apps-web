export default function Card(id, avatar,name, login) {
    return (`
        <section class='c-card' data-id='${id}'>
            <img src='${avatar}' />
            <h1 class='h1'>${name}></h1>
            <h4 class='h4'>${login}</h4>
            
            <div class='button'>
                <button id='del' data-id='${id}'>Excluir</button>
            </div>
        </section>
    `)
}