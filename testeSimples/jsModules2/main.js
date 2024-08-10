import { header } from './components/header.js'
import { content } from './components/content.js'
import { menuTailwindcss } from './components/meuTailwindcss.js'

document.getElementById('root').innerHTML = `
  ${menuTailwindcss}
  
  ${header('w-full h-60 flex justify-center items-center')}

  ${content('w-full h-full flex justify-center items-center')}
`
