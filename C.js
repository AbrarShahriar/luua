

class WCWrapper extends HTMLElement {

  constructor() {
    super()
    
    this.state = {}
    this.props = {}

    this._template = document.createElement('template')

    //templating
    this._template.innerHTML += `
    <style>
      ${this.styles()}
    </style>
    `
    
  }

  connectedCallback() {
    this._template.innerHTML += this.render()
    
    const global = this

    const handler = {
        get: function(target, prop, receiver) {
          return global.getAttribute(prop)
        }
    };

    this.props = new Proxy({}, handler);

    //add shadow dom
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(this._template.content.cloneNode(true))
    
    this.onMount(this.shadowRoot)
    
    
  }
  

  //STYLES
  styles() {
    return ""
  }

  // LIFECYCLE METHODS
  getProps(props) {
    return props
  }
  onMount(shadowDom) {
    return shadowDom
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


class Props {
  constructor() {
    
  }
  
  get(a,b,c) {
    console.log(a,b,c);
    return a[b]
  }
}


export default WCWrapper
export { bind }