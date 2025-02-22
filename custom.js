import bsElements from './src/bsElements.js'
import { fromString, fromUrl } from './style.js'

function bsFromString ({ register, css } = {}) {
  const style = fromString(css)

  return bsElements({ register, style })
}

async function bsFromUrl ({ register, css } = {}) {
  const style = await fromUrl(css)

  return bsElements({ register, style })
}

export default {
  fromString: bsFromString,
  fromUrl: bsFromUrl
}
