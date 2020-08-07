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
        text("GAME START!", 0, 15)
        Player.getPlayerInfo();
        if (allPlayers.player1 !== undefined) {
            let displayPosition = 30;
            textSize(15);
            for (let p in allPlayers) {
                if (p === "player" + player.index) {
                    fill(255, 0, 0);
                } else {
                    fill(80 ,80, 80)
                }
                text(allPlayers[p].name + " : " + allPlayers[p].distance.x + ", " + allPlayers[p].distance.y, 15, displayPosition)
                displayPosition += 15;
            }
        }
    }
}