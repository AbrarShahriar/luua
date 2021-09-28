class WCWrapper extends HTMLElement {

  constructor() {
    super()

    const template = document.createElement('template')

    //templating
    template.innerHTML += `
    <style>
      ${this.styles()}
    </style>
    `
    template.innerHTML += this.render()

    //add shadow dom
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.onMount(this.shadowRoot)
  }

  //STYLES
  styles() {
    return ""
  }

  // LIFECYCLE METHODS
  onMount(shadowDom) {
    return null
  }
  render() {
    return ""
  }
}

function bind(elems) {
  elems.map(el => {
    window.customElements.define(el.tag, el.ref)
  })
}

export default WCWrapper
export { bind }