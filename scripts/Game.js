import { Enemy } from "./Enemy.js";
import { Player } from "./Player.js";
import { Prize } from "./Prize.js";
import { score } from "./Score.js";
import { Life } from "./Life.js";
import { reStartButton } from "./script.js";


let dinWidth;
let dinHeight;
const board = document.getElementById("main-game");
const playerDiv = document.getElementById("player");


export class Game {
    constructor() {
        this.life = new Life();
        this.player = new Player();
        this.attachEventListeners();
        this.enemy = new Enemy(this);
        this.prize = new Prize();
        this.score();
        this.minions = [];
        this.enemyInterval = setInterval(() => this.randomPosition(), 2000);
        this.moveDetectInterval = setInterval(() => this.moveDetect(), 60);
    }

    attachEventListeners() {
        const dinWidth = document.getElementById("main-game").offsetWidth;
        const dinHeight = document.getElementById("main-game").offsetHeight;

        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft" && this.player.positionX > 0) {
                this.player.moveLeft();
                playerDiv.style.backgroundImage = "url('../media/SpaceDruidRun.gif')"
                playerDiv.style.transform = "rotateY(180deg)";

            } else if (event.key === "ArrowRight" && this.player.positionX < dinWidth - this.player.width) {
                this.player.moveRight();
                playerDiv.style.backgroundImage = "url('../media/SpaceDruidRun.gif')"
                playerDiv.style.transform = "rotateY(0deg)";

            } else if (event.key === "ArrowUp" && this.player.positionY < dinHeight - this.player.height) {
                this.player.moveUp();
                playerDiv.style.backgroundImage = "url('../media/SpaceDruidRun.gif')"

            } else if (event.key === "ArrowDown" && this.player.positionY > 0) {
                this.player.moveDown();
                playerDiv.style.backgroundImage = "url('../media/SpaceDruidRun.gif')"

            }
        });

        document.addEventListener("keyup", (event) => {
            playerDiv.style.backgroundImage = "url('../media/PlayerStanding.png')"

        })
    };

    randomPosition() {
        const directions = ["left", "right", "up", "down"];
        const enemies = [this.enemy, ...this.minions]
        enemies.forEach((enemy) => {
            const randomDirection = directions[Math.floor(Math.random() * directions.length)];
            enemy.direction = randomDirection;

        })

    }

    moveDetect() {
        const dinWidth = document.getElementById("main-game").offsetWidth;
        const dinHeight = document.getElementById("main-game").offsetHeight;
        const enemies = [this.enemy, ...this.minions]


        //move enemy
        enemies.forEach((enemy) => {

            if (enemy.direction === "left" && enemy.positionX > 0) {
                enemy.moveLeft();
            } else if (enemy.direction === "right" && enemy.positionX <= dinWidth - enemy.width) {
                enemy.moveRight();
            } else if (enemy.direction === "up" && enemy.positionY <= dinHeight - enemy.height) {
                enemy.moveUp();
            } else if (enemy.direction === "down" && enemy.positionY > 0) {
                enemy.moveDown();
            }

            if (
                this.player.positionX < enemy.positionX + enemy.width &&
                this.player.positionX + this.player.width > enemy.positionX &&
                this.player.positionY < enemy.positionY + enemy.height &&
                this.player.height + this.player.positionY > enemy.positionY
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
        });

        //detect collision


        this.score();
    }

    spawnEnemy() {
        const newEnemy = new Enemy(this);
        const enemy = document.getElementsByClassName("enemy");
        const spawnedEnemy = [...enemy];

        for (let i = 1; i < spawnedEnemy.length; i++) {

            spawnedEnemy[i].style.backgroundImage = "url('/media/spawnedEnemy2.gif')";
            spawnedEnemy[i].style.width = "60px";
            spawnedEnemy[i].style.height = "50px";
        }

        this.minions.push(newEnemy);
    }

    score() {
        const removeFlower = document.getElementsByClassName("flower")[0]
        console.log(removeFlower);
        const points = document.getElementById("points")


        if (
            this.player.positionX < this.prize.positionX + this.prize.width &&
            this.player.positionX + this.player.width > this.prize.positionX &&
            this.player.positionY < this.prize.positionY + this.prize.height &&
            this.player.height + this.player.positionY > this.prize.positionY
        ) {
            score.value += 20;
            points.innerHTML = score.value;
            removeFlower?.remove();
            this.prize = new Prize();
            this.enemy.speed += 2;
            this.spawnEnemy();
            // this.enemy = new Enemy();
        }
    }

    gameover(score) {
        clearInterval(this.enemyInterval);
        clearInterval(this.moveDetectInterval);
        const gameoverDiv = document.getElementById("gameover-div");
        gameoverDiv.style.display = "flex";

        const gameoverScore = document.createElement("button");
        gameoverScore.setAttribute("id", "gameover-score");
        gameoverDiv.appendChild(gameoverScore);

        const scoreElement = document.getElementById("points");
        const gameoverText = document.createElement("span");
        gameoverDiv.appendChild(gameoverText);
        gameoverScore.appendChild(scoreElement);

        const removePlayer = document.getElementById("player");
        removePlayer.style.display = "none";
        const gameoverText1 = document.createElement("span")
        const gameoverText2 = document.createElement("span")
        const gameoverText3 = document.createElement("span")
        gameoverText1.textContent = "OH NO!"
        gameoverText2.textContent = "It appears you and your doggo have died a horrible and painful death !!"
        gameoverText3.textContent = "But hey...Try again :)"
        gameoverDiv.appendChild(gameoverText1);
        gameoverDiv.appendChild(gameoverText2);
        gameoverDiv.appendChild(gameoverText3);
        gameoverDiv.appendChild(reStartButton);
        scoreElement.style.animation = "none";
        // gameoverText1.style.animation = "none";
        // gameoverText2.style.animation = "none";
        // gameoverText3.style.animation = "none";
    }
}

sessionStorage.setItem("newScore", score);
