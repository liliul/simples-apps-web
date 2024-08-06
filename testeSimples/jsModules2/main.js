document.getElementById('root').innerHTML = `
  ${html('text-emerald-500 text-xl')}
`

function html(tailwindcss) {
  return (`
    <h1 class='${tailwindcss}'>Tailwindcss</h1>
  `)
}