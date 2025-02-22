import { html, nothing, LitElement } from 'lit'

function bsButton ({ style }) {
  class BsButton extends LitElement {
    static get properties () {
      return {
        active: Boolean,
        disabled: Boolean,
        size: String,
        toggle: Boolean,
        type: String
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

    static type = {
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      danger: 'danger',
      warning: 'warning',
      info: 'info',
      light: 'light',
      dark: 'dark',
      link: 'link'
    }

    onClick () {
      if (this.toggle) {
        this.active = !this.active

        const options = {
          detail: {
            active: this.active
          }
        }

        this.dispatchEvent(new CustomEvent('toggle', options))
      }

      this.dispatchEvent(new CustomEvent('click'))
    }

    render () {
      const active = (this.toggle && this.active) ? 'active' : ''

      let size = BsButton.size[this.size] || ''

      if (size) {
        size = `btn-${size}`
      }

      const type = `btn-${BsButton.type[this.type] || 'primary'}`

      return html`<button
        class="btn ${size} ${type} ${active}"
        disabled=${this.disabled || nothing}
        type="button"
        @click=${this.onClick}><slot></slot></button>`
    }
  }

  return {
    BsButton
  }
}

export default bsButton
