import { html, LitElement } from 'lit'

function selectExample ({ BsSelect, style }) {
  class SelectExample extends LitElement {
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
            <h6>key-value pairs</h6>
            <bs-select
              aria-label="key-value pairs"
              .options=${{ test1: 'Test 1', test2: 'Test 2', test3: 'Test 3' }}
              selected="test2"
              @change=${event => {
                this.changeEvent = event
              }}></bs-select>
            <hr>

            <h6>array values</h6>
            <bs-select
              aria-label="array values"
              .options=${['Test 1', 'Test 2', 'Test 3']}
              selected="Test 2"
              @change=${event => {
                this.changeEvent = event
              }}></bs-select>
            <hr>

            <h6>size</h6>
            ${Object.keys(BsSelect.size).map(size => html`
              <bs-select
                aria-label=${size}
                size=${size}
                .options=${['Test 1', 'Test 2', 'Test 3']}
                @click=${event => {
                  this.changeEvent = event
                }}></bs-select>`
            )}
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

  window.customElements.define('ex-example-select', SelectExample)
}

export default selectExample
