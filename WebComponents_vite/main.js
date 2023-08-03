import './style.css'

//Creamos el template
const template = document.createElement("template");
template.innerHTML = `
<header>
  <h1>Hola Mundo!!!</h1>  
</header>

`

//Creamos una clase para consumir el template y definir el web component

class HeaderComponet extends HTMLElement {
  constructor() {
    super()
    //Añadir la sombra a la clase; shadowRoot
    this.attachShadow({ mode: "open" })
    //Obtener el contenido del template
    const shadowTemplate = template.content.cloneNode(true)
    //Agregamos el clone del template al shadowroot de la clase
    this.shadowRoot.append(shadowTemplate)
  }
}

customElements.define('header-component', HeaderComponet);
