import { Enemy } from "./Enemy.js";
import { Player } from "./Player.js";
import { Prize } from "./Prize.js";
import { score } from "./Score.js";
import { Life } from "./Life.js";
import { startButton } from "./script.js";

let dinWidth;
let dinHeight;
const board = document.getElementById("main-game");



export class Game {
    constructor() {
        this.life = new Life();
        this.player = new Player();
        this.attachEventListeners();
        this.enemy = new Enemy(this);
        this.prize = new Prize();
        this.score();
        this.numPrizesCollected = 0;
        this.enemyInterval = setInterval(() => this.randomPosition(), 2000);

        this.moveDetectInterval = setInterval(() => this.moveDetect(), 60);
    }

    attachEventListeners() {

        const dinWidth = document.getElementById("main-game").offsetWidth;
        const dinHeight = document.getElementById("main-game").offsetHeight;

        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft" && this.player.positionX > 0) {
                this.player.moveLeft();
            } else if (event.key === "ArrowRight" && this.player.positionX < dinWidth - this.player.width) {
                this.player.moveRight();
            } else if (event.key === "ArrowUp" && this.player.positionY < dinHeight - this.player.height) {
                this.player.moveUp();
            } else if (event.key === "ArrowDown" && this.player.positionY > 0) {
                this.player.moveDown();
            }
        });
    };

    randomPosition() {
        const directions = ["left", "right", "up", "down"];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        this.enemy.direction = randomDirection;

    }

    moveDetect() {
        const dinWidth = document.getElementById("main-game").offsetWidth;
        const dinHeight = document.getElementById("main-game").offsetHeight;
        //move enemy
        if (this.enemy.direction === "left" && this.enemy.positionX > 0) {
            this.enemy.moveLeft();
        } else if (this.enemy.direction === "right" && this.enemy.positionX <= dinWidth - this.enemy.width) {
            this.enemy.moveRight();
        } else if (this.enemy.direction === "up" && this.enemy.positionY <= dinHeight - this.enemy.height) {
            this.enemy.moveUp();
        } else if (this.enemy.direction === "down" && this.enemy.positionY > 0) {
            this.enemy.moveDown();
        }
        //detect collision
        if (
            this.player.positionX < this.enemy.positionX + this.enemy.width &&
            this.player.positionX + this.player.width > this.enemy.positionX &&
            this.player.positionY < this.enemy.positionY + this.enemy.height &&
            this.player.height + this.player.positionY > this.enemy.positionY
        ) {

            const heart = document.getElementsByClassName("heart")[0];
            const heartContainer = document.getElementById("hearts-container");
            heart.remove();
            this.player.positionX = 20;
            this.player.positionY = 10;

            if (heartContainer.childElementCount === 0) {
                this.gameover(score.value);
            }
        }
        this.score();
    }

    score() {
        const removeFlower = document.getElementsByClassName("flower")[0]
        const points = document.getElementById("points");

        if (
            this.player.positionX < this.prize.positionX + this.prize.width &&
            this.player.positionX + this.player.width > this.prize.positionX &&
            this.player.positionY < this.prize.positionY + this.prize.height &&
            this.player.height + this.player.positionY > this.prize.positionY
        ) {

            this.numPrizesCollected++;
            score.value += 20;
            points.innerHTML = score.value;
            removeFlower?.remove();
            this.prize = new Prize();
            this.enemy.speed += 2;


        }
    }

    gameover(score) {
        const gameoverDiv = document.createElement("div");
        gameoverDiv.setAttribute("id", "gameover-div");
        document.body.appendChild(gameoverDiv);

        const gameoverScore = document.createElement("button");
        gameoverScore.setAttribute("id", "gameover-score");
        gameoverDiv.appendChild(gameoverScore);

        const scoreElement = document.getElementById("points");
        const gameoverText = document.createElement("span");
        gameoverDiv.appendChild(gameoverText);
        gameoverScore.appendChild(scoreElement);

        const removePlayer = document.getElementById("player");
        removePlayer.style.display = "none";
        removePlayer.style.bottom = "10";
        removePlayer.style.left = "20";
        const removeEnemy = document.getElementById("enemy");
        removeEnemy.style.display = "none";


        const gameoverText1 = document.createElement("span")
        const gameoverText2 = document.createElement("span")
        const gameoverText3 = document.createElement("span")
        const startAgainText = document.createElement("span")
        gameoverText1.textContent = "OH NO!"
        gameoverText2.textContent = "It appears you and your doggo have died a horrible and painful death!!"
        gameoverText3.textContent = "But hey..."
        startAgainText.textContent = "Try Again :)"
        gameoverDiv.appendChild(gameoverText1);
        gameoverDiv.appendChild(gameoverText2);
        gameoverDiv.appendChild(gameoverText3);
        startButton.appendChild(startAgainText)
        gameoverDiv.appendChild(startButton);
        clearInterval(this.enemyInterval);
        clearInterval(this.moveDetectInterval);

    }

}
sessionStorage.setItem("newScore", score);
