import { html, LitElement } from 'lit'

function bsTabs ({ style }) {
  class BsTabs extends LitElement {
    static get styles () {
      return style
    }

    constructor () {
      super()

      this.selected = null
      this.tabs = []
    }

    connectedCallback () {
      super.connectedCallback()

      for (const slot of this.children) {
        const name = slot.getAttribute('slot')

        if (!name) {
          continue
        }

        this.tabs.push(name)

        if (slot.getAttribute('selected')) {
          this.selected = name
        }
      }
    }

    changeTab (event, tab) {
      event.preventDefault()
      this.selected = tab
      this.requestUpdate()
    }

    render () {
      const selected = this.selected || this.tabs[0]

      const tabs = this.tabs.map(tab => {
        return html`
          <li class="nav-item">
            <a class="nav-link ${selected === tab ? 'active' : ''}" aria-current="page" href="#"
              @click=${event => this.changeTab(event, tab)}>${tab}</a>
          </li>`
      })

      const content = this.tabs.map((tab, index) => {
        return html`<div class="tab-pane fade ${tab === selected ? 'show active' : ''}" role="tabpanel" tabIndex=${index}>
          <slot name=${tab}></slot>
        </div>`
      })

      return html`
        <ul class="nav nav-tabs" role="tablist">${tabs}</ul>
        <div class="tab-content">${content}</div>
      `
    }
  }

  return {
    BsTabs
  }
}

export default bsTabs
