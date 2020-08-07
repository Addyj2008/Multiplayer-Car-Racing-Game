class Form {
    constructor () {}
    display() {
        this.title = createElement('h2');
        this.title.html("CAR RACING GAME");
        this.title.position(75, 75);
        this.input = createInput("YOUR NAME");
        this.input.position(100, 200);
        this.button = createButton("PLAY");
        this.button.position(100, 300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.greeting = createElement('h3');
            this.greeting.html("WELCOME " + this.input.value() + "<br>WAITING FOR MORE PLAYERS...");
            this.greeting.position(100, 150);
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