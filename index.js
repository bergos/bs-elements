import css from './css.js'
import bsElements from './src/bsElements.js'
import { fromString } from './style.js'

function bootstrap ({ register } = {}) {
  const style = fromString(css)

  return bsElements({ register, style })
}

function documentStyle () {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

export {
  bootstrap,
  documentStyle
}
