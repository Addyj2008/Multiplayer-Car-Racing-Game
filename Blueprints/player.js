class Player {
    constructor () {
        this.index = null;
        this.name = "";
        this.distance = {'x' : 0, 'y' : 0};
    }
    getCount() {
        database.ref('playerCount').on('value', function (data) {
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({'playerCount' : count});
    }
    update() {
        let playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({'name' : this.name, 'distance' : this.distance});
    }
    static getPlayerInfo() {
        database.ref('players').on('value', (data)=>{
            allPlayers = data.val();
        })
    }
}