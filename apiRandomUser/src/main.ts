import './style.css'
import './api/index.ts'
import {Card} from './layout/card.ts'

const divId = document.querySelector<HtmlDivElement>('#app').innerHTML = `
  ${Card()}
`
