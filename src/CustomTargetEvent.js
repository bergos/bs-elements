class CustomTargetEvent extends CustomEvent {
  constructor (type, options) {
    super(type, options)

    if (options?.target) {
      Object.defineProperty(this, 'target', { writable: false, value: options.target })
    }
  }
}

export default CustomTargetEvent
