const player = {
    positionX: 0,
    positionY: 0,
    domElement: document.getElementById("player"),
    width: 20 + "px",
    height: 30 + "px",
}


const enemy = {
    width: 10,
    height: 10,
    positionX: 300,
    positionY: 100,
    domElement: document.getElementById("enemy"),
};




let moveBy = 5;

window.addEventListener("DOMContentLoaded", () => {
    // display player
    player.domElement.style.left = player.positionX + "px";
    player.domElement.style.top = player.positionY + "px";

    // display enemy
    enemy.domElement.style.left = enemy.positionX + "px";
    enemy.domElement.style.top = enemy.positionY + "px";


});

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
});











/* function movingEnemy(foe){
    let time = 0
setInterval(function () {
    const intervalOne = setInterval(()=>{
        foe.moveEnemyLeft();
        time++;
        if(time === 150){
            clear(intervalOne)
            let timeTwo = 0;
            const intervalTwo = setInterval(()=>{
                foe.moveEnemyRight();
                timeTwo++;
                if(timeTwo === 150){
                   clearInterval(intervalTwo)
                   this.moveBack(foe);
                }
            },20)
            }
        },20)
    }
}



     moveEnemyLeft(){
        
    enemy.positionX -= moveBy;
    enemy.domElement.style.left = parseInt(enemy.positionX) + "px"
    } */