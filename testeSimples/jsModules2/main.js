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

function header(tailwindcss) {
  return (`
    <header class='${tailwindcss}'>${titleHeader('w-2/4 h-48 bg-gray-800 p-2 rounded-md')}</header>
  `)
}


function titleHeader(tailwindcss) {
  return (`
    <section class='${tailwindcss}'>
      <ul class='w-full'>
        <li class='text-xl text-yellow-400'>Iniciando com css</li>
        <li class='text-xl text-green-400'>Começando com sass</li>
        <li class='text-xl text-blue-400'>Utilizando bootstrap</li>
        <li class='text-xl text-pink-400'>Finalizando com tailwindcss</li>
      </ul>
    </section>
  `)
}