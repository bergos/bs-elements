import { html, LitElement } from 'lit'

function buttonExample ({ BsButton, style }) {
  class ButtonExample extends LitElement {
    static get properties () {
      return {
        clickEvent: Object,
        toggleEvent: Object
      }
    }

    static get styles () {
      return style
    }

    render () {
      return html`
        <ex-example title="Input">
          <div slot="example">
            <h6>type</h6>
            ${Object.keys(BsButton.type).map(type => html`
              <bs-button
                type=${type}
                @click=${event => {
                  this.clickEvent = event
                }}>${type}</bs-button>`
            )}
            <hr>

            <h6>size</h6>
            ${Object.keys(BsButton.size).map(size => html`
              <bs-button
                size=${size}
                @click=${event => {
                  this.clickEvent = event
                }}>${size}</bs-button>`
            )}
            <hr>

            <h6>disabled</h6>
              <bs-button
                disabled=true
                @click=${event => {
                  this.clickEvent = event
                }}>disabled</bs-button>
            <hr>

            <h6>toggle</h6>
              <bs-button
                toggle=true
                @click=${event => {
                  this.clickEvent = event
                }}
                @toggle=${event => {
                  this.toggleEvent = event
                }}>toggle</bs-button>
            <hr>
          </div>
          <div slot="events">
            <label>source</label>
            <bs-textarea disabled value=${this.clickEvent?.target.outerHTML}></bs-textarea>
            <label>click</label>
            <bs-textarea disabled value=${JSON.stringify(this.clickEvent?.detail)}></bs-textarea>
            <label>toggle</label>
            <bs-textarea disabled value=${JSON.stringify(this.toggleEvent?.detail)}></bs-textarea>
          </div>
        </ex-example>`
    }
  }

  window.customElements.define('ex-example-button', ButtonExample)
}

export default buttonExample
