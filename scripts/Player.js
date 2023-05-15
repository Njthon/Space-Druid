export class Player {
    constructor() {
        this.positionX = 20;
        this.positionY = 10;
        this.width = 60;
        this.height = 60;
        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.getElementById('player')

        this.domElement.style.width = this.width + "px";
        this.domElement.style.height = this.height + "px";
        this.domElement.style.bottom = this.positionY + "px";
        this.domElement.style.left = this.positionX + "px";

        const boardElm = document.getElementById("main-game");
        boardElm.appendChild(this.domElement)
    }
    moveLeft() {
        this.positionX = this.positionX - 5;
        this.domElement.style.left = this.positionX + "px";
    }
    moveRight() {
        this.positionX = this.positionX + 5;
        this.domElement.style.left = this.positionX + "px";
    }
    moveUp() {
        this.positionY = this.positionY + 5;
        this.domElement.style.bottom = this.positionY + "px";
    }
    moveDown() {
        this.positionY = this.positionY - 5;
        this.domElement.style.bottom = this.positionY + "px";
    }
}
