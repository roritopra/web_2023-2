import '../styles/counter.css';

//Creamos el template
const template = document.createElement("template");
template.innerHTML = `
<style>@import url('../styles/counter.css');</style>

<div>
    <h2><slot></slot></h2>
</div>
`


class CounterComponent extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })

    const shadowTemplate = template.content.cloneNode(true)

    this.shadowRoot.append(shadowTemplate)
  }
}

customElements.define('counter-component', CounterComponent);
