import { html, LitElement } from 'lit'

function tableExample ({ BsTable, style }) {
  class TableExample extends LitElement {
    static get properties () {
      return {
        changeEvent: Object
      }
    }

    static get styles () {
      return style
    }

    render () {
      const columns = {
        col1: 'column 1',
        col2: 'column 2',
        col3: 'column 3'
      }

      const rows = [{
        col1: 'value 1a',
        col2: html`<strong>value 2a</strong>`,
        col3: 'value 3a'
      }, {
        col1: 'value 1b',
        col2: 'value 2b',
        col3: 'value 3b'
      }, {
        col1: 'value 1c',
        col2: 'value 2c',
        col3: 'value 3c'
      }]

      return html`
        <ex-example title="Table">
          <div slot="example">
            <h6>Default</h6>
            <bs-table
              .rows=${rows}></bs-table>
            <hr>

            <h6>Named Columns</h6>
            <bs-table
              .columns=${columns}
              .rows=${rows}></bs-table>
            <hr>
            
            <h6>Variant: bordered</h6>
            <bs-table
              .rows=${rows}
              variant=${BsTable.variant.bordered}></bs-table>
            <hr>

            <h6>Variant: borderless</h6>
            <bs-table
              .rows=${rows}
              variant=${BsTable.variant.borderless}></bs-table>
            <hr>

            <h6>Variant: hover</h6>
            <bs-table
              .rows=${rows}
              variant=${BsTable.variant.hover}></bs-table>
            <hr>

            <h6>Variant: striped</h6>
            <bs-table
              .rows=${rows}
              variant=${BsTable.variant.striped}></bs-table>
            <hr>

            <h6>Variant: stripedColumns</h6>
            <bs-table
              .rows=${rows}
              variant=${BsTable.variant.stripedColumns}></bs-table>
            <hr>
          </div>
        </ex-example>`
    }
  }

  window.customElements.define('ex-example-table', TableExample)
}

export default tableExample
