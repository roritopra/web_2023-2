const template = document.createElement("template")

template.innerHTML = `
<style>@import url('../styles/button.css');</style>
  <button id="btn"></button>
`

class ButtonComponent extends HTMLElement {
    constructor() {
        super() |
            this.attachShadow({ mode: "open" })
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
        //obtener el atributo type
        this.type = this.getAttribute("type")
        console.log(this.type)
        //obtener el element button del shadowRoot
        this.btn = this.shadowRoot.querySelector("button")
        this.btn.innerText = this.type
        //al this.btn añadirle una clase add | substract
        this.btn.classList.add(this.type);
        // 1. obtener el counter-component
        this.contador = document.querySelector("counter-component")
        // Miramos si funciona o que trae
        console.log(this.contador);
        //2. obtener el atributto "value" del counter-component
        this.valor = this.contador.getAttribute("value")
        // Miramos si funciona o que trae
        console.log(this.valor);
    }

    connectedCallback() {
        console.log(`Me rendericé ${this.type}`)
        //Listener botón
        this.btn.addEventListener('click', () => {
            console.log(`Click en: ${this.type}`);
            //1. obtener el counter-component
            //2. obtener el atributto "value" del counter-component
            this.currentValue = +this.contador.getAttribute("value")
            console.log(typeof this.currentValue)
            this.numValue = parseInt(this.currentValue)
            //3. calcular el nuevo valor según el tipo del botón
            const newValue = (this.type === "add") ? this.add(this.currentValue) : this.substract(this.currentValue)
            //4. setear al attributo "value  de "counter-component ese nuevo valor
            this.contador.setAttribute("value", newValue)
            this.contador.h2Element.innerText = newValue
            console.log(newValue)
        })
    }

    disconnectedCallback() {
        console.log(`Me desmonté ${this.type}`)

    }

    add(value) {
        return value + 1
     }

     substract(value) {
      return (value > 0)
      ? (value - 1)
      :value;
    }
}

customElements.define("button-component", ButtonComponent)