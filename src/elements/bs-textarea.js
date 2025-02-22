import { html, nothing, LitElement } from 'lit'
import CustomTargetEvent from '../CustomTargetEvent.js'

function bsTextarea ({ style }) {
  class BsTextarea extends LitElement {
    static get properties () {
      return {
        disabled: Boolean,
        readonly: Boolean,
        rows: Number,
        size: String,
        value: String
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

    onInput () {
      const textarea = this.renderRoot.querySelector('textarea')

      this.value = textarea.value

      const options = {
        detail: {
          value: this.value
        },
        target: this
      }

      this.dispatchEvent(new CustomTargetEvent('change', options))
    }

    render () {
      let size = BsTextarea.size[this.size] || ''

      if (size) {
        size = `form-control-${size}`
      }

      return html`<textarea
        class="form-control ${size}"
        disabled=${this.disabled || nothing}
        readonly=${this.readonly || nothing}
        rows=${this.rows}
        @input=${this.onInput}>${this.value}</textarea>`
    }
  }

  return {
    BsTextarea
  }
}

export default bsTextarea
