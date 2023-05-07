
import { Enemy } from "./Enemy.js";

import { Player } from "./Player.js";

import { Prize } from "./Prize.js";

import { score } from "./Score.js";

import { Game } from "./Game.js";


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




//BUTTON GAME START
export const startButton = document.createElement("button");
startButton.setAttribute("id", "start-button");
startgameDiv.appendChild(startButton);
startButton.addEventListener("click", function () {
    const startGame = new Game()
    startgameDiv.style.display = "none";
}
);





