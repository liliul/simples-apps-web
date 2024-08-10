import { h1 } from './utils.js'

export function content(tailwindcss) {
  return (`
    <article class='${tailwindcss}'>${h1('text-emerald-500 text-xl')}</article>
  `)
}
