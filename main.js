
import TempWrapper, { bind } from "./C.js"

class AH1 extends TempWrapper {
  constructor() {
    super()
    
    
  }
 
  onMount() {
    this.shadowDom.addListenerTo({ el: "button", listener: "click", callback: this.handleSubmit })
  }
  
  style(i = true) {
    if(i) {
      return {
        el: "div", 
        styles: {
          backgroundColor: "red",
          color: "green",
        }
      }
    } else {
      return `
        div {
          background-color: red;
          color: green;
        }
      `
    }
  }
  
  handleSubmit() {
    console.log("successful!!");
    
    
  }
  
  render() {
    console.log(this.h);
    return (
      `
        <div>
          <h1></h1>
          <button>Submit</button>
        </div>
      `
    )
  }
}


bind([{
  ref: AH1,
  tag: "a-h1"
}])