import { html, render } from 'lit'
import { bootstrap, documentStyle } from '../index.js'
import buttonExample from './button-example.js'
import exampleElements from './example-elements.js'
import inputExample from './input-example.js'
import selectExample from './select-example.js'
import tableExample from './table-example.js'
import tabsExample from './tabs-example.js'
import textareaExample from './textarea-example.js'

documentStyle()

const {
  BsButton,
  BsInput,
  BsSelect,
  BsTable,
  BsTextarea,
  style
} = bootstrap({ register: true })

exampleElements({ style })

buttonExample({ BsButton, style })
inputExample({ BsInput, style })
selectExample({ BsSelect, style })
tableExample({ BsTable, style })
tabsExample({ style })
textareaExample({ BsTextarea, style })

render(html`
  <ex-section title="Bootstrap Elements" level="1">
    <p>Lit-based Web Components using Bootstrap.</p>
  </ex-section>
  <ex-section title="Button">
    <ex-example-button></ex-example-button>
  </ex-section>
  <ex-section title="Input">
    <ex-example-input></ex-example-input>
  </ex-section>
  <ex-section title="Select">
    <ex-example-select></ex-example-select>
  </ex-section>
  <ex-section title="Table">
    <ex-example-table></ex-example-table>
  </ex-section>
  <ex-section title="Tabs">
    <ex-example-tabs></ex-example-tabs>
  </ex-section>
  <ex-section title="Textarea">
    <ex-example-textarea></ex-example-textarea>
  </ex-section>
`, document.getElementById('content'))
