
class Wrapper extends HTMLElement {
  constructor() {
    super()
    
  }
  
  
  
  createState(state) {
    return state
  }
}


class TempWrapper extends Wrapper {
  constructor() {
    super()
    
    this.shadowDom = null
    
    this.styles = null
  }
  
  connectedCallback() {
    let shadowDom = this.shadowRoot
    this.shadowDom = shadowDom
    this.shadowRoot.addListenerTo = function (options) {
      shadowDom.querySelector(options.el).addEventListener(options.listener, function(e) {
        options.callback(e, shadowDom)
      })
    }
    
    this.onMount(shadowDom)
  }
  
  initComponent
}

function bind(els) {
  els.map(el =>  {
    window.customElements.define(el.tag, el.ref)
  })
}

export default TempWrapper
export { bind }