import { html, LitElement } from 'lit'

function bsTable ({ style }) {
  class BsTable extends LitElement {
    static get properties () {
      return {
        columns: Object,
        rows: Array,
        variant: String
      }
    }

    static get styles () {
      return style
    }

    static size = {
      default: null,
      small: 'table-sm'
    }

    static variant = {
      bordered: 'table-bordered',
      borderless: 'table-borderless',
      hover: 'table-hover',
      striped: 'table-striped',
      stripedColumns: 'table-striped-columns'
    }

    render () {
      let keys = []
      let names = []

      if (this.columns) {
        keys = Object.keys(this.columns)
        names = Object.values(this.columns)
      } else {
        keys = Object.keys((this.rows || [])[0])
        names = keys
      }

      const headers = html`<tr>${names.map(name => html`<th>${name}</th>`)}</tr>`
      const rows = (this.rows || []).map(row => {
        return html`<tr>${keys.map(key => html`<td>${row[key]}</td>`)}</tr>`
      })

      return html`
        <table class="table ${this.variant}">
          <thead>${headers}</thead>
          <tbody>${rows}</tbody>
        </table>
      `
    }
  }

  return {
    BsTable
  }
}

export default bsTable
