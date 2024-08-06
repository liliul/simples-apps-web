document.getElementById('root').innerHTML = `
  ${article('w-full h-full flex justify-center itens-center')}
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