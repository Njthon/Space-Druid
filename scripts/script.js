const player = {
    positionX: 0,
    positionY: 0,
    domElement: document.getElementById("player"),
    width: 20 + "px",
    height: 30 + "px",
}

const enemy = {
    width: 50,
    height: 50,
    positionX: 500,
    positionY: 400,
    direction: "left",
    domElement: document.getElementById("enemy")

};

let moveBy = 5;


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
}


function attachEventListeners() {
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "a":
                if (player.positionX - moveBy >= 0) {
                    player.positionX -= moveBy;
                    player.domElement.style.left = parseInt(player.positionX) + "px"
                }
                break;
            case "d":
                if (player.positionX + moveBy <= 685) {
                    player.positionX += moveBy;
                    player.domElement.style.left = parseInt(player.positionX) + "px"
                } break;
            case "w":
                if (player.positionY - moveBy >= 0) {
                    player.positionY -= moveBy;
                    player.domElement.style.top = parseInt(player.positionY) + "px"
                } break;
            case "s":
                if (player.positionY + moveBy <= 665) {
                    player.positionY += moveBy;
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
    if (enemy.direction === "left") {
        enemy.positionX -= moveBy;
        enemy.domElement.style.left = parseInt(enemy.positionX) + "px";
    } else if (enemy.direction === "right") {
        enemy.positionX += moveBy;
        enemy.domElement.style.left = parseInt(enemy.positionX) + "px";
    } else if (enemy.direction === "up") {
        enemy.positionY -= moveBy;
        enemy.domElement.style.top = parseInt(enemy.positionY) + "px";
    } else if (enemy.direction === "down") {
        enemy.positionY += moveBy;
        enemy.domElement.style.top = parseInt(enemy.positionY) + "px";
    }


    //detect collision
    if () {
        console.log("gamover... ");
    }


}, 60);



