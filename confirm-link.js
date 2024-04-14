class Confirmlink extends HTMLAnchorElement{
    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm("do you want to leave ?")) {
                event.preventDefault();
            }
        });

    }
}

customElements.define('my-confirm-link', Confirmlink, { extends: 'a' });