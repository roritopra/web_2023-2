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
  }

  connectedCallback() {
    console.log(`Me renderice ${this.type}`)
  }

  disconnectedCallback() {

  }
}

customElements.define('button-component', ButtonComponent);
const addBtn = document.querySelector('button-component [type=add]')
console.log(addBtn)
addBtn.remove()
