import { header } from './components/header.js'

document.getElementById('root').innerHTML = `
  ${header('w-full h-60 flex justify-center items-center')}

  ${article('w-full h-full flex justify-center items-center')}
`
function article(tailwindcss) {
  return (`
    <article class='${tailwindcss}'>${html('text-emerald-500 text-xl')}</article>
  `)
}

function html(tailwindcss) {
  return (`
    <h1 class='${tailwindcss}'>Tailwindcss</h1>
  `)
}

