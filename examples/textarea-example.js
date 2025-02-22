import { html, LitElement } from 'lit'

function textareaExample ({ BsTextarea, style }) {
  class TextareaExample extends LitElement {
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
        <ex-example title="Textarea">
          <div slot="example">
            <h6>Default</h6>
            <bs-textarea
              rows=5
              value="This is a test"
              @change=${event => {
                this.changeEvent = event
              }}></bs-input>></bs-textarea>
            <hr>

            <h6>size</h6>
            ${Object.keys(BsTextarea.size).map(size => html`
              <bs-textarea
                rows=5
                size=${size}
                value=${size}
                @change=${event => {
                  this.changeEvent = event
                }}></bs-input>></bs-textarea>`
            )}
            <hr>

            <h6>Disabled</h6>
            <bs-textarea disabled value="This is disabled"></bs-textarea>
            <hr>

            <h6>Readonly</h6>
            <bs-textarea readonly value="This is readonly"></bs-textarea>
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

  window.customElements.define('ex-example-textarea', TextareaExample)
}

export default textareaExample
