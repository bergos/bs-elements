import { unsafeCSS } from 'lit'

function fromString (content) {
  const css = unsafeCSS(content)

  for (const rule of css.styleSheet.rules) {
    if (/^:root/.test(rule.selectorText)) {
      rule.selectorText = rule.selectorText.split(':root').join(':root, :host')
    }

    if (/^body/.test(rule.selectorText)) {
      rule.selectorText = rule.selectorText.split('body').join(':root, :host')
    }
  }

  return css
}

async function fromUrl (url = 'https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css') {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`could not load style from ${url}: ${res.statusText}`)
  }

  const content = await res.text()

  return fromString(content)
}

export {
  fromString,
  fromUrl
}
