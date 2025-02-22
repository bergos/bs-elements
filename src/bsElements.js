import bsButton from './elements/bs-button.js'
import bsInput from './elements/bs-input.js'
import bsSelect from './elements/bs-select.js'
import bsTable from './elements/bs-table.js'
import bsTabs from './elements/bs-tabs.js'
import bsTextarea from './elements/bs-textarea.js'

function bsElements ({ register, style } = {}) {
  const { BsButton } = bsButton({ style })
  const { BsInput, BsInputDatetimeLocal, BsInputNumber } = bsInput({ style })
  const { BsSelect } = bsSelect({ style })
  const { BsTable } = bsTable({ style })
  const { BsTabs } = bsTabs({ style })
  const { BsTextarea } = bsTextarea({ style })

  if (register) {
    window.customElements.define('bs-button', BsButton)
    window.customElements.define('bs-input', BsInput)
    window.customElements.define('bs-input-datetime-local', BsInputDatetimeLocal)
    window.customElements.define('bs-input-number', BsInputNumber)
    window.customElements.define('bs-select', BsSelect)
    window.customElements.define('bs-table', BsTable)
    window.customElements.define('bs-tabs', BsTabs)
    window.customElements.define('bs-textarea', BsTextarea)
  }

  return {
    BsButton,
    BsInput,
    BsInputDatetimeLocal,
    BsInputNumber,
    BsSelect,
    BsTable,
    BsTabs,
    BsTextarea,
    style
  }
}

export default bsElements
