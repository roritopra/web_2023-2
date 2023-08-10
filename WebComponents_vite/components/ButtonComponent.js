import '../styles/button.css';

//Creamos el template
const template = document.createElement("template");
template.innerHTML = `
<style>@import url('../styles/button.css');</style>

<div>
  <button id="btn">
  </button>
</div>
`

class ButtonComponent extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    const shadowTemplate = template.content.cloneNode(true)
    this.shadowRoot.append(shadowTemplate);
    this.type = this.getAttribute("type");
    this.btn = this.shadowRoot.querySelector("button");
    console.log(this.btn);
    this.btn.innerText = this.type;
    this.btn.classList.add(this.type);
    this.counter = document.querySelector('counter-component')
    console.log(this.counter)
  }
  
  connectedCallback() {
    console.log(`Me renderice ${this.type}`)
    //Listen button
    this.btn.addEventListener('click', ()=> {
      console.log(this.btn.type);
      this.counterValue = this.counter.getAttribute('value')
      console.log(this.counterValue)
      const newValue = (this.type === "add") ? this.add(this.currentValue) : this.substract(this.currentValue)
    }); 
  }

  disconnectedCallback() {

  }
}

export function setupCounter(element) {
  const setCounter = (count) => {
    counter = count
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


customElements.define('button-component', ButtonComponent);
/*
const addBtn = document.querySelector('button-component [type=add]')
console.log(addBtn)
addBtn.remove()*/
