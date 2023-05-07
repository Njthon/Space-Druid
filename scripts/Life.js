export class Life {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.createHeartContainer();
        this.createHeart();
        this.createHeart();
        this.createHeart();
    }

    createHeartContainer() {
        const boardElm = document.getElementById("main-game")
        this.heartContainer = document.createElement("div");
        this.heartContainer.setAttribute("id", "hearts-container");
        boardElm.appendChild(this.heartContainer);


    }

    createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.width = this.width + "px";
        heart.style.height = this.height + "px";
        this.heartContainer.appendChild(heart)

    }

}