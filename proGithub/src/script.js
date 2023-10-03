const nome = document.querySelector('#userNome')
const avatar = document.querySelector('#avatar')
const bio = document.querySelector('#bio')

const linkGithub = document.querySelector('#link-github')
const linkBlog = document.querySelector('#link-blog')

const local = document.querySelector('#local')
const company = document.querySelector('#company')
const twitter = document.querySelector('#twitter')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const reposPublic = document.querySelector('#repo-public')
const gistsPublic = document.querySelector('#gists-public')



let http = 'https://'
let httptwiter = `${http}twitter.com/`

const username = 'diego3g'

fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) =>  {

     
        nome.innerText = data.name
        avatar.src = data.avatar_url

        linkGithub.href = data.html_url
        bio.innerText = data.bio

        const bloglink = data.blog
        linkBlog.href = `${http}${bloglink}`

        local.innerText = data.location
        company.innerText = data.company
        
        const twitterlink = data.twitter_username
        twitter.innerText = data.twitter_username
        twitter.href = `${httptwiter}${twitterlink}`
        
        followers.innerText = data.followers
        following.innerText = data.following

        reposPublic.innerText = data.public_repos
        gistsPublic.innerText = data.public_gists
        
})


// buscar dados da api do github users repos
const cards = document.querySelector('#cards')

let nomehub = 'maykbrito'
let url = `https://api.github.com/users/${nomehub}/repos` 
fetch(url)
  .then((response) => response.json())
  .then((grepos) => {
   
      
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
   
})
