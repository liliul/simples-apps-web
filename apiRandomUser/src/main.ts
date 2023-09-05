import './style.css'
import {Card} from './layout/card.ts'

document.querySelector<HTMLDivElement>('#app').innerHTML = `${Card()}`
