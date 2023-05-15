const dinHeight = document.getElementById("main-game").offsetHeight;
const dinWidth = document.getElementById("main-game").offsetWidth;

export class Enemy {
    constructor() {
        this.width = 100;
        this.height = 90;
        this.positionX = Math.floor(Math.random() * (dinWidth - this.width + 1));;
        this.positionY = Math.floor(Math.random() * (dinHeight - this.height + 1));;
        this.direction = '';
        this.createDomElement();
        this.speed = 3;

    }
    createDomElement() {

        this.domElement = document.createElement('div');
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
