import { Enemy } from "./Enemy.js";
import { Player } from "./Player.js";
import { Prize } from "./Prize.js";
import { score } from "./Score.js";
import { Game } from "./Game.js";

window.onload = function () {
    // Your code to start the track goes here
};


// START GAME 


const startgameDiv = document.createElement("div");
startgameDiv.setAttribute("id", "startgame-div");
document.body.appendChild(startgameDiv);

const startgameText1 = document.createElement("span")
const startgameText2 = document.createElement("span")
startgameText1.textContent = "Sara the Space Druid and her doggo are traveling through deep space. But doggo got sick :("
startgameText2.textContent = "Help the courageous Space Druid to collect plants to cure her friend!"
startgameDiv.appendChild(startgameText1);
startgameDiv.appendChild(startgameText2);

// BUTTON GAME START
const startButton = document.createElement("button");
startButton.setAttribute("class", "start-button");
startButton.innerHTML = "Start";
startgameDiv.appendChild(startButton);

startButton.addEventListener("click", function () {
    const startGame = new Game()
    startgameDiv.style.display = "none";
});

// BUTTON RE-START GAME
export const reStartButton = document.createElement("button");
const gameoverDiv = document.getElementById("gameover-div");
reStartButton.setAttribute("id", "reStart-button");
reStartButton.innerHTML = "Start";
gameoverDiv.appendChild(reStartButton);

// Event Listener
reStartButton.addEventListener("click", function () {
    const enemy = document.getElementsByClassName("enemy");
    const prize = document.getElementsByClassName("flower");

    const removeEnemy = [...enemy]
    const removePrize = [...prize]

    const removeSpan = document.querySelectorAll("span");
    const removeButtons = document.getElementById("gameover-score")
    const removePlayer = document.getElementById("player");

    // Remove Elements
    gameoverDiv.style.display = "none";
    removePlayer.style.display = "flex";
    removeButtons.style.display = "none";

    removeSpan.forEach((span) => {
        span.style.display = "none";
    })

    for (let i = 0; i < removeEnemy.length; i++) {
        removeEnemy[i].remove();
    };

    for (let i = 0; i < removePrize.length; i++) {
        removePrize[i].remove();
    }

    const startGame = new Game()
});







