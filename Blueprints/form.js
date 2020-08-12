class Form {
    constructor () {}
    display() {
        this.title = createElement('h2');
        this.title.html("CAR RACING GAME");
        this.title.position(window.innerWidth * 1/20 + 0.04 * width, window.innerHeight * 1/20 + 0.04 * height);
        this.input = createInput("YOUR NAME");
        this.input.position(window.innerWidth * 1/20 + 0.12 * width, window.innerHeight * 1/20 + 0.4 * height);
        this.button = createButton("PLAY");
        this.button.position(window.innerWidth * 1/20 + 0.12 * width, window.innerHeight * 1/20 + 0.8 * height);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.greeting = createElement('h3');
            this.greeting.html("WELCOME " + this.input.value() + "<br>WAITING FOR MORE PLAYERS...");
            this.greeting.position(window.innerWidth * 1/20 + 0.08 * width, window.innerHeight * 1/20 + 0.4 * height);
            playerCount += 1;
            player.name = this.input.value();
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });
    }
    hide() {
        this.title.hide()
        this.greeting.hide()
    }
}