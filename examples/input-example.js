import { html, LitElement } from 'lit'

function inputExample ({ BsInput, style }) {
  class InputExample extends LitElement {
    static get properties () {
      return {
        changeEvent: Object
      }
    }

    static get styles () {
      return style
    }

    render () {
      return html`
        <ex-example title="Input">
          <div slot="example">
            <h6>Default</h6>
            <bs-input
              value="Hello World!"
              @change=${event => {
                this.changeEvent = event
              }}></bs-input>
            <hr>

            <h6>size</h6>
            ${Object.keys(BsInput.size).map(size => html`
              <bs-input
                size=${size}
                value=${size}
                @change=${event => {
                  this.changeEvent = event
                }}></bs-input>`
            )}
            <hr>

            <h6>Datetime Local</h6>
            <bs-input-datetime-local
              value="2000-01-01T00:00:00"
              @change=${event => {
                this.changeEvent = event
              }}></bs-input-datetime-local>
            <hr>
            
            <h6>Number</h6>
            <bs-input-number
              max="200"
              min="100"
              step="0.25"
              value="150.25"
              @change=${event => {
                this.changeEvent = event
              }}></bs-input-number>
            <hr>
          </div>
          <div slot="events">
            <label>source</label>
            <bs-textarea disabled value=${this.changeEvent?.target.outerHTML}></bs-textarea>
            <label>change</label>
            <bs-textarea disabled value=${JSON.stringify(this.changeEvent?.detail)}></bs-textarea>
          </div>
        </ex-example>`
    }
  }

  window.customElements.define('ex-example-input', InputExample)
}

export default inputExample
