import Wrapper from "../C.js"

export default class Card extends Wrapper {
  constructor(){
    super()
  }
  
  styles() {
    return `
      .card {
        border-radius: 10px;
        box-shadow: 0 0 4px -1px rgba(0,0,0,.5);
        max-width: 300px;
        border: 1px solid rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
      }
      
      .header {
        background: lightgrey;
        border-bottom: 1px solid black;
        padding: 5px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
      }
      .header > *:first-child {
        flex: 1;
      }
      
      .body {
        padding: 10px;
      }
    `
  }
  
  render() {
    return `
      <div class="card">
        <div class="header">
          <span>
            <slot class="name" name="name">Adib</slot>
          </span>
            <div class="menu">
            ...</div>
        </div>
        <div class="body">
          <slot name="desc">lorem ipsum dolor.</slot>
        </div>
      </div>
    `
  }
}