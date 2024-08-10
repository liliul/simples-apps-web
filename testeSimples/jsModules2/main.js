import { header } from './components/header.js'
import { content } from './components/content.js'

document.getElementById('root').innerHTML = `
  ${header('w-full h-60 flex justify-center items-center')}

  ${content('w-full h-full flex justify-center items-center')}
`
