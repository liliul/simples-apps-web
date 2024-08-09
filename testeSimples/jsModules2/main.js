import { header } from './components/header.js'
import { article } from './components/content.js'
 
document.getElementById('root').innerHTML = `
  ${header('w-full h-60 flex justify-center items-center')}

  ${article('w-full h-full flex justify-center items-center')}
`
