import WCWrapper, { bind } from "./C.js";
 

class Card extends WCWrapper {
    constructor() {
        super()
    }

    // LIFECYCLE METHOD
    onMount(shadowDom) {
        const p = shadowDom.querySelector('p')
        const btn = shadowDom.querySelector('#showHide')
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
        `
    }

    render() {
        return `
        <div class="card">
            <h2>Hello</h2>
            <p>Web Component Library</p>
            <button id="showHide">Show</button>
        </div>
        `
    }
}
class Para extends WCWrapper {
    constructor() {
        super()
    }
    render() {
        return `
        <p> hello </p>
        <wc-card></wc-card>
        `
    }
}


bind([
    {
        tag: "wc-card",
        ref: Card
    },
    {
        tag: "wc-p",
        ref: Para
    },
])