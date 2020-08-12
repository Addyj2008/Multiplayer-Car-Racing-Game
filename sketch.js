let ball, database, Ref, gameState, playerCount, form, player, game, allPlayers, playerSprites = [null, null, null, null], loop1;

function setup(){
    createCanvas(window.innerWidth - window.innerWidth/10, window.innerHeight - window.innerHeight/10);
    gameState = "WAIT";
    game = new Game();
    allPlayers = [];
    database = firebase.database();
    game.getState();
    game.start();
}

function draw(){
    background(255, 255, 255);
    if (playerCount === 4 && gameState === "WAIT") {
        gameState = "PLAY";
        form.hide()
        database.ref('players/player1/distance').update({'x' : 25, 'y' : 475});
        database.ref('players/player2/distance').update({'x' : 150, 'y' : 475});
        database.ref('players/player3/distance').update({'x' : 275, 'y' : 475});
        database.ref('players/player4/distance').update({'x' : 400, 'y' : 475});
    }
    if (gameState === "PLAY") {
        game.play();
    }
}