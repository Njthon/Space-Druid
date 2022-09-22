const player = {
    positionX: 0,
    positionY: 0,
    domElement: document.getElementById("player"),
    width: 50,
    height: 50,
}

const enemy = {
    width: 50,
    height: 50,
    positionX: 500,
    positionY: 400,
    direction: "left",
    domElement: document.getElementById("enemy")

};

class Prize {

    constructor() {
        this.width = 30;
        this.height = 30;
        this.positionX = Math.floor(Math.random() * (665 - this.width + 1));
        this.positionY = Math.floor(Math.random() * (685 - this.width + 1));
        this.createDom();
        this.flower = [];
        this.dom = null;
    }
    createDom() {
        this.dom = document.createElement('div');
        this.dom.className = "flower";
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.top = this.positionY + "px";
        this.dom.style.left = this.positionX + "px";

        const boardElm = document.getElementById("main-game");
        boardElm.appendChild(this.dom)
    }


}

let prize = new Prize();

let moveBy = 5;

let playerMoveBy = 15;


window.addEventListener("DOMContentLoaded", () => {
    displayElements();
    attachEventListeners();
});

function displayElements() {
    // display player)
    player.domElement.style.left = player.positionX + "px";
    player.domElement.style.top = player.positionY + "px";

    // display enemy
    enemy.domElement.style.left = enemy.positionX + "px";
    enemy.domElement.style.top = enemy.positionY + "px";

    enemy.domElement.style.width = enemy.width + "px"
    enemy.domElement.style.height = enemy.height + "px"

    player.domElement.style.width = player.width + "px"
    player.domElement.style.height = player.height + "px"
}


function attachEventListeners() {
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "a":
            case "ArrowLeft":
                if (player.positionX - playerMoveBy >= 0) {
                    player.positionX -= playerMoveBy;
                    player.domElement.style.left = parseInt(player.positionX) + "px"
                }
                break;
            case "d":
            case "ArrowRight":
                if (player.positionX + playerMoveBy <= 685) {
                    player.positionX += playerMoveBy;
                    player.domElement.style.left = parseInt(player.positionX) + "px"
                } break;
            case "w":
            case "ArrowUp":
                if (player.positionY - playerMoveBy >= 0) {
                    player.positionY -= playerMoveBy;
                    player.domElement.style.top = parseInt(player.positionY) + "px"
                } break;
            case "s":
            case "ArrowDown":
                if (player.positionY + playerMoveBy <= 665) {
                    player.positionY += playerMoveBy;
                    player.domElement.style.top = parseInt(player.positionY) + "px"
                } break;
        }
    })
}


//change direction
setInterval(function () {
    const directions = ['left', 'right', 'up', 'down'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    enemy.direction = randomDirection;
}, 2000)


//move enemy & detect collision
setInterval(function () {

    //move enemy
    if (enemy.direction === "left" && enemy.positionX >= 0) {
        enemy.positionX -= moveBy;
        enemy.domElement.style.left = parseInt(enemy.positionX) + "px";
    } else if (enemy.direction === "right" && enemy.positionX <= 685) {
        enemy.positionX += moveBy;
        enemy.domElement.style.left = parseInt(enemy.positionX) + "px";
    } else if (enemy.direction === "up" && enemy.positionY >= 0) {
        enemy.positionY -= moveBy;
        enemy.domElement.style.top = parseInt(enemy.positionY) + "px";
    } else if (enemy.direction === "down" && enemy.positionY <= 665) {
        enemy.positionY += moveBy;
        enemy.domElement.style.top = parseInt(enemy.positionY) + "px";
    }


    //detect collision
    if (
        player.positionX < enemy.positionX + enemy.width &&
        player.positionX + player.width > enemy.positionX &&
        player.positionY < enemy.positionY + enemy.height &&
        player.height + player.positionY > enemy.positionY
    ) {
        console.log("gamover... ");
        location.href = 'gameover.html';
    }
    scoring()


}, 60);



function scoring() {
    const removeFlower = document.getElementsByClassName("flower")[0]
    const points = document.getElementById("points")
    let score = +points.innerHTML || 0;


    if (
        player.positionX < prize.positionX + prize.width &&
        player.positionX + player.width > prize.positionX &&
        player.positionY < prize.positionY + prize.height &&
        player.height + player.positionY > prize.positionY
    ) {

        score += 20;
        points.innerHTML = score;
        removeFlower.remove();
        moveBy += 1;
        prize = new Prize();
    }
}

