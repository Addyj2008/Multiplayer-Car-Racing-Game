let ball, database, Ref, gameState, playerCount, form, player, game, allPlayers, playerSprites = [null, null, null, null], loop1, loop2,  groundIMG, trackIMG;

function preload() {
    groundIMG = loadImage('images/ground.png');
    trackIMG = loadImage('images/track.jpg');
}

function setup(){
    createCanvas(window.innerWidth - window.innerWidth/10, window.innerHeight - window.innerHeight/10);
    imageMode(CENTER);
    gameState = "WAIT";
    game = new Game();
    allPlayers = [];
    database = firebase.database();
    game.getState();
    game.start();
}

function draw() {
    for (loop1 = -1; loop1 < 2; loop1 += 1) {
        for (loop2 = -1; loop2 < 2; loop2 += 1) {
            image(groundIMG, (round(player.distance.x/500) + loop2) * width, (round(player.distance.y/500) + loop1) * height, width, height);
        }
    }
    if (playerCount === 4 && gameState === "WAIT") {
        gameState = "PLAY";
        form.hide()
        for (loop1 = 0; loop1 < 4; loop1 += 1) {
            database.ref('players/player' + (loop1 + 1) + '/distance').update({'x' : 25 + loop1 * 125, 'y' : 475});
        }
    }
    if (gameState === "PLAY") {
        image(trackIMG, width/2, height - height * 5, width * 2, height * 10);
        game.play();
    }
}