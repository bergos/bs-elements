import { html, LitElement } from 'lit'

function exampleElements ({ style }) {
  class ExExample extends LitElement {
    static get properties () {
      return {
        title: String
      }
    }

    static get styles () {
      return style
    }

    render () {
      let events = html``

      if (this.querySelector('[slot=events]')) {
        events = html`<div class="card mt-3">
          <div class="card-body">
            <h6 class="card-title">Events</h6>
            <slot name="events"></slot>
          </div>
        </div>`
      }

      return html`<div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <slot name="example"></slot>

          ${events}
        </div>
      </div>`
    }
  }

  class ExSection extends LitElement {
    static get properties () {
      return {
        level: String,
        title: String
      }
    }

    static get styles () {
      return style
    }

    constructor () {
      super()

      this.level = 1
    }

    render () {
      let titleHtml = ''

      if (this.level.toString() === '1') {
        titleHtml = html`<h1>${this.title}</h1>`
      } else if (this.level.toString() === '2') {
        titleHtml = html`<h2>${this.title}</h2>`
      }

      return html`${titleHtml}<slot></slot>`
    }
  }

  window.customElements.define('ex-example', ExExample)
  window.customElements.define('ex-section', ExSection)
}

export default exampleElements
