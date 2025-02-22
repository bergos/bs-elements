import { html, LitElement } from 'lit'

function tabsExample ({ style }) {
  class TabsExample extends LitElement {
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
        <ex-example title="Tabs">
          <div slot="example">
            <bs-tabs>
              <div slot="Tab 1" class="mt-3">
                <h6>Header of Tab 1</h6>
                Example text for Tab 1. Click on the other tabs to switch.
              </div>
              <div slot="Tab 2" class="mt-3">
                <h6>Header of Tab 2</h6>
                Here is another example text for Tab 2. Click on the other tabs to switch.
              </div>
              <div slot="Tab 3" class="mt-3">
                <h6>Header of Tab 3</h6>
                Example text for Tab 3. Click on the other tabs to switch.
              </div>
            </bs-tabs>
          </div>
        </ex-example>`
    }
  }

  window.customElements.define('ex-example-tabs', TabsExample)
}

export default tabsExample
