let ball, database, Ref, gameState, playerCount, form, player, game, allPlayers;

function setup(){
    createCanvas(500,500);
    gameState = "WAIT";
    game = new Game();
    allPlayers = [];
    database = firebase.database();
    game.getState();
    game.start();
}

function draw(){
    background(255, 255, 255);
    if (playerCount === 2) {
        gameState = "PLAY";
        form.hide()
    }
    if (gameState === "PLAY") {
        game.play();
    }
    drawSprites();
}