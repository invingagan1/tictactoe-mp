var Game = function(type, players){
    if(type !== undefined){
        this.type = type;
    }

    this.id = utils.create_uuidv4();
    this.elements = [];
    this.players = players;

    this.setActivePlayer(Object.keys(this.players)[parseInt(Math.random() * (Object.keys(this.players).length))]);

    var elementType = 1;

    for(var p in this.players){
        var player = this.players[p];
        player.set("elementType", elementType++);    
    }

    for(var r = 0; r < this.type; r++){
        this.elements[r] = [];
        for(var c = 0; c < this.type; c++){
            this.elements[r][c] = new Element({
                row: r,
                col:c
            });
        }
    }
};
Game.typeEnum = {
    '_3X3':3,
    '_4X4':4,
    '_5X5':5,
    '_6X6':6,
    '_7X7':7
};
Game.prototype = {
    type: Game.typeEnum._3X3,
    activePlayer:'',
    setActivePlayer: function(activePlayer){
        this.activePlayer = activePlayer;
    }
};