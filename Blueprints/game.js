class Game {
    constructor(){}
    getState() {
        database.ref('gameState').on("value", function(data) {
            gameState = data.val();
        });
    }
    updateState(state) {
        database.ref('/').update({
            'gameState' : state
        });
    }
    start() {
        if (gameState === "WAIT") {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        player[0] = createSprite(0.05 * width, 0.95 * height, width/10, height/10);
        player[1] = createSprite(0.2 * width, 0.95 * height, width/10, height/10);
        player[2] = createSprite(0.35 * width, 0.95 * height, width/10, height/10);
        player[3] = createSprite(0.5 * width, 0.95 * height, width/10, height/10);
    }
    play() {
        if (keyCode === UP_ARROW) {
            player.distance.y -= 1;
            player.update();
            keyCode = 0;
        }
        if (keyCode === DOWN_ARROW) {
            player.distance.y += 1;
            player.update();
            keyCode = 0;
        }
        if (keyCode === LEFT_ARROW) {
            player.distance.x -= 1;
            player.update();
            keyCode = 0;
        }
        if (keyCode === RIGHT_ARROW) {
            player.distance.x += 1;
            player.update();
            keyCode = 0;
        }
        text("GAME START!", 0, 15 * height/500)
        Player.getPlayerInfo();
        if (allPlayers.player1 !== undefined) {
            for (loop1 = 1; loop1 < 5; loop1++) {
                if (player.index === loop1) {
                    player[loop1 - 1].shapeColor = rgb(255, 0, 0);
                } else {
                    player[loop1 - 1].shapeColor = rgb(0, 255, 0);
                }
            }
            player[0].x = allPlayers.player1.distance.x * width/500;
            player[0].y = allPlayers.player1.distance.y * height/500;
            player[1].x = allPlayers.player2.distance.x * width/500;
            player[1].y = allPlayers.player2.distance.y * height/500;
            player[2].x = allPlayers.player3.distance.x * width/500;
            player[2].y = allPlayers.player3.distance.y * height/500;
            player[3].x = allPlayers.player4.distance.x * width/500;
            player[3].y = allPlayers.player4.distance.y * height/500;
        }
        drawSprites();
    }
}