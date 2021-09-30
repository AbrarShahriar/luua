import WCWrapper, { bind } from "./C.js";
 

class Card extends WCWrapper {
    constructor() {
      super()
    }

    // LIFECYCLE METHOD
    onMount(shadowDom) {
      
        const p = shadowDom.querySelector('p')
        const btn = shadowDom.querySelector('#showHide')
        
        const addBtn = shadowDom.getElementById("add")
        addBtn.addEventListener("click", () => {
          
        })
        
        
        btn.addEventListener("click", () => {
            if(p.style.display != "none") {
                p.style.display = "none"
                btn.innerText = "Hide"
            } else {
                p.style.display = "block"
                btn.innerText = "Show"
            }
            
        })
    }
    
    styles() {
        return `
            .card {
                background-color: gray;
                outline: 2px solid yellow;
                text-align: center;
            }
            .shadow {
              box-shadow: 0 0 2px 7px rgba(0,0,0,0.5);
            }
        `
    }

    render() {
        return `
        <div class="card">
            <h2>count: 0</h2>
            <p>Web Component Library </p>
            <button id="showHide">Show</button>
            <button id="add">Add</button>
        </div>
        `
    }
}


bind([
    {
        tag: "wc-card",
        ref: Card
    },
])