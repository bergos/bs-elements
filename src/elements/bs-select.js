import { html, nothing, LitElement } from 'lit'
import CustomTargetEvent from '../CustomTargetEvent.js'

function bsSelect ({ style }) {
  class BsSelect extends LitElement {
    static get properties () {
      return {
        options: [Array, Object],
        selected: String,
        size: String
      }
    }

    static get styles () {
      return style
    }

    static size = {
      default: '',
      large: 'lg',
      small: 'sm'
    }

    onChange () {
      const option = this.renderRoot.querySelector('option:checked')

      const options = {
        detail: {
          text: option.innerText,
          value: option.value
        },
        target: this
      }

      this.dispatchEvent(new CustomTargetEvent('change', options))
    }

    render () {
      let options

      if (Array.isArray(this.options)) {
        options = Object.entries(this.options).map(([key, value]) => {
          return html`<option selected=${this.selected === value || nothing} value=${key}>${value}</option>`
        })
      } else {
        options = Object.entries(this.options).map(([key, value]) => {
          return html`<option selected=${this.selected === key || nothing} value=${key}>${value}</option>`
        })
      }

      let size = BsSelect.size[this.size] || ''

      if (size) {
        size = `form-select-${size}`
      }

      return html`<select class="form-select ${size}" @change=${this.onChange}>${options}</select>`
    }
  }

  return {
    BsSelect
  }
}

export default bsSelect
