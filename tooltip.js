class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipcontainer;
        this._tooltiptext = 'maaamaa';
        this.attachShadow({mode : 'open'});
        const template = document.querySelector('#tooltip-temp')
        this.shadowRoot.appendChild(template.content.cloneNode(true));     

        // console.log("working!");
    }
    connectedCallback(){
        if (this.hasAttribute('text')) {
            this._tooltiptext = this.getAttribute('text');
        }
        const newtool = this.shadowRoot.querySelector('span');
        newtool.addEventListener('mouseenter', this._Showtooltip.bind(this));
        newtool.addEventListener('mouseleave', this._Hidetooltip.bind(this));
        this.shadowRoot.appendChild(newtool);
        this.style.position = 'relative';



    }
    _Showtooltip(){
        this._tooltipcontainer = document.createElement('div');
        this._tooltipcontainer.textContent = this._tooltiptext;
        this._tooltipcontainer.style.backgroundColor = 'black';
        this._tooltipcontainer.style.color = 'white';
        this._tooltipcontainer.style.position = 'absolute';
        this._tooltipcontainer.style.zIndex = 10;

        this.shadowRoot.appendChild(this._tooltipcontainer);
    }
    _Hidetooltip(){
        this.shadowRoot.removeChild(this._tooltipcontainer);
    }
}

customElements.define("my-tooltip", Tooltip);