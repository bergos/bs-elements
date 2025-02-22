import { html, nothing, LitElement } from 'lit'
import CustomTargetEvent from '../CustomTargetEvent.js'

function bsInput ({ style }) {
  class BsInput extends LitElement {
    static get properties () {
      return {
        disabled: Boolean,
        max: Number,
        min: Number,
        placeholder: String,
        readonly: Boolean,
        size: String,
        step: Number,
        type: String,
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

    constructor () {
      super()

      this.type = 'text'
    }

    onInput () {
      const input = this.renderRoot.querySelector('input')

      const options = {
        detail: {
          value: input.value
        },
        target: this
      }

      this.dispatchEvent(new CustomTargetEvent('change', options))
    }

    render () {
      let size = BsInput.size[this.size] || ''

      if (size) {
        size = `form-control-${size}`
      }

      return html`<input
        class="form-control ${size}"
        disabled=${this.disabled || nothing}
        max=${this.max !== undefined ? this.max : nothing}
        min=${this.min !== undefined ? this.min : nothing}
        placeholder=${this.placeholder}
        readonly=${this.readonly || nothing}
        step=${this.step !== undefined ? this.step : nothing}
        type=${this.type}
        value=${this.value}
        @input=${this.onInput}>`
    }
  }

  class BsInputDatetimeLocal extends BsInput {
    constructor () {
      super()

      // TODO date given:
      // const dateTimeLocalValue = (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);

      this.type = 'datetime-local'
    }

    onInput () {
      const input = this.renderRoot.querySelector('input')

      const options = {
        detail: {
          value: new Date(input.value)
        },
        target: this
      }

      this.dispatchEvent(new CustomTargetEvent('change', options))
    }
  }

  class BsInputNumber extends BsInput {
    constructor () {
      super()

      this.type = 'number'
    }

    onInput () {
      const input = this.renderRoot.querySelector('input')

      const options = {
        detail: {
          value: parseFloat(input.value, 10)
        },
        target: this
      }

      this.dispatchEvent(new CustomTargetEvent('change', options))
    }
  }

  return {
    BsInput,
    BsInputDatetimeLocal,
    BsInputNumber
  }
}

export default bsInput
