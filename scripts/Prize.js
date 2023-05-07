export class Prize {

    constructor() {
        this.width = 40;
        this.height = 40;
        this.positionX = Math.floor(Math.random() * (727 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (717 - this.height + 1));
        this.createDom();
        this.flower = [];
        this.dom = null;
    }
    createDom() {
        this.dom = document.createElement('div');
        this.dom.className = "flower";
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.bottom = this.positionY + "px";
        this.dom.style.left = this.positionX + "px";

        const boardElm = document.getElementById("main-game");
        boardElm.appendChild(this.dom)
    }
};
