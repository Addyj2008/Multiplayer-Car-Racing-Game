class Player {
    constructor () {
        this.index = null;
        this.name = "";
        this.distance = {'x' : 0, 'y' : 475};
        this.rank = "Not Finished";
    }
    getCount() {
        database.ref('playerCount').on('value', function (data) {
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({'playerCount' : count});
        this.distance.x = (count - 1) * 125 + 25;
    }
    update() {
        let playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({'name' : this.name, 'distance' : this.distance, 'rank' : this.rank});
    }
    static getPlayerInfo() {
        database.ref('players').on('value', (data)=>{
            allPlayers = data.val();
        })
    }
}