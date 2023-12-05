class BorderElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="border-color: white; border-width=4px; border-radius=8px">${this.innerHTML}</div>`
        ;
    }
}

customElements.define("x-border", BorderElement);