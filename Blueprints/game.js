class Game {
    constructor(){}
    start() {
        if (gameState === "WAIT") {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        player[0] = createSprite(0.05 * width, 0.95 * height);
        player[1] = createSprite(0.2 * width, 0.95 * height);
        player[2] = createSprite(0.35 * width, 0.95 * height);
        player[3] = createSprite(0.5 * width, 0.95 * height);
        for (loop1 = 0; loop1 < 4; loop1 += 1) {
            player[loop1].addImage(loadImage('images/car' + (loop1 + 1) + '.png'));
            player[loop1].scale = height/500;
        }
    }
    play() {
        drawSprites();
        if (keyCode === UP_ARROW) {
            player.distance.y -= 10;
            keyCode = 0;
        }
        if (keyCode === DOWN_ARROW) {
            player.distance.y += 10;
            keyCode = 0;
        }
        if (keyCode === LEFT_ARROW) {
            player.distance.x -= 5;
            keyCode = 0;
        }
        if (keyCode === RIGHT_ARROW) {
            player.distance.x += 5;
            keyCode = 0;
        }
        Player.getPlayerInfo();
        if (allPlayers.player1 !== undefined) {
            player[0].x = allPlayers.player1.distance.x * width/500;
            player[0].y = allPlayers.player1.distance.y * height/500;
            player[1].x = allPlayers.player2.distance.x * width/500;
            player[1].y = allPlayers.player2.distance.y * height/500;
            player[2].x = allPlayers.player3.distance.x * width/500;
            player[2].y = allPlayers.player3.distance.y * height/500;
            player[3].x = allPlayers.player4.distance.x * width/500;
            player[3].y = allPlayers.player4.distance.y * height/500;
            player[0].bounceOff(player[1]);
            player[0].bounceOff(player[2]);
            player[0].bounceOff(player[3]);
            player[1].bounceOff(player[2]);
            player[1].bounceOff(player[3]);
            player[2].bounceOff(player[3]);
            for (loop1 in allPlayers) {
                if ("player" + player.index === loop1) {
                    fill(255, 255, 0);
                    if (allPlayers[loop1].distance.y <= -4310) {
                        carsReached += 1;
                        database.ref('/').update({'carsReached' : carsReached});
                        gameState = "END";
                        player.rank = carsReached;
                    }
                } else {
                    fill(80, 80, 80);
                }
                text(allPlayers[loop1].name, allPlayers[loop1].distance.x * width/500, allPlayers[loop1].distance.y * height/500);
            }
            player.update();
            camera.position.x = player.distance.x * width/500;
            camera.position.y = player.distance.y * height/500;
        }
    }
}