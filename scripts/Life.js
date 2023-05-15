export class Life {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.createHeart();

    }


    createHeart() {
        const heart = document.createElement("div");
        const heartContainer = document.getElementById("hearts-container");
        heart.className = "heart";
        heart.style.width = this.width + "px";
        heart.style.height = this.height + "px";
        heartContainer.appendChild(heart)

    }

}