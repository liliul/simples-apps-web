import './style.css'
// import './api/index.ts'
import {Card} from './layout/card.ts'

document.querySelector<HTMLDivElement>('#app').innerHTML = `${Card()}`
