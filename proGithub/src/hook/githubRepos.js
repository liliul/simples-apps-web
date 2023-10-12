/**
 * função que renderiza html
 *
 * @param {object} Repos
 * @returns {html}
*/

export function Repos(grepos) {
	const cards = document.querySelector('#cards')

	grepos.map(list => {
        const nameRepo = document.createElement('h1')
        const htmlUrl = document.createElement('a')
        const article = document.createElement('article')
        const description = document.createElement('p')
        const language = document.createElement('span')

        
        htmlUrl.href = list.html_url

        article.classList.add('card')

        nameRepo.innerHTML = list.name
        description.innerHTML = list.description
        description.classList.add('s-desc')
        language.innerHTML = list.language
        language.classList.add('lang')

        cards.appendChild(htmlUrl)
        htmlUrl.appendChild(article)
        article.appendChild(nameRepo)
        article.appendChild(description)
        article.appendChild(language)

    })   
}
