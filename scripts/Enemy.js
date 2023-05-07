export class Enemy {
    constructor() {
        this.width = 60;
        this.height = 50;
        this.positionX = 500;
        this.positionY = 400;
        this.direction = '';
        this.createDomElement();
        this.speed = 3;

    }
    createDomElement() {

        this.domElement = document.getElementById('enemy');
        this.domElement.className = "enemy";
        this.domElement.style.width = this.width + "px";
        this.domElement.style.height = this.height + "px";
        this.domElement.style.left = this.positionX + "px";
        this.domElement.style.bottom = this.positionY + "px";


        const boardElm = document.getElementById("main-game")
        boardElm.appendChild(this.domElement)

    }
    moveUp() {
        this.positionY += this.speed;
        this.domElement.style.bottom = this.positionY + "px";
    }
    moveDown() {
        this.positionY -= this.speed;
        this.domElement.style.bottom = this.positionY + "px";
    }
    moveRight() {
        this.positionX += this.speed;
        this.domElement.style.left = this.positionX + "px";
    }
    moveLeft() {
        this.positionX -= this.speed;
        this.domElement.style.left = this.positionX + "px";
    }


};
