var Game = function(type, players){
    if(type !== undefined){
        this.type = type;
    }

    this.id = utils.create_uuidv4();
    this.elements = [];
    this.players = players;
    this.setToWin = (this.type === Game.typeEnum._3X3) ? 3 : 4;
    var elementType = 1;

    for(var p in this.players){
        var player = this.players[p];
        player.set("elementType", elementType++);    
    }

    for(var r = 0; r < this.type; r++){
        this.elements[r] = [];
        for(var c = 0; c < this.type; c++){
            this.elements[r][c] = new Element({
                id: r+'-'+c,
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
    setToWin:0,
    setActivePlayer: function(activePlayer){
        this.activePlayer = activePlayer;
        app.views.game.updateActivePlayer(activePlayer);
        if(this.activePlayer === 'computer'){
            setTimeout((function(){
                this.computerWillMove();
            }).bind(this), 100);
            
        }else if(this.activePlayer === 'me'){
            console.log('i will play ');
        }else{
            console.log("wait for opponent to play");
        }
    },
    playMove: function(elementRef){
        if(this.activePlayer === 'me'){
            var player = this.players[this.activePlayer];
            var elementType = this.players[this.activePlayer].get("elementType");
            var $element = $(elementRef);
            var elementId = $element.data('elementId');
            var elementIdArr = elementId.split('-');
            var element = game.elements[elementIdArr[0]][elementIdArr[1]];
            
            if(!element.get('isSelected')){
                element.set('type', elementType);
                element.set('player', this.activePlayer);
                $element.find('.icon').html(Element_Icons_Enum[elementType]);
                element.set('isSelected', true);
                this.switchPlayer();
            }
        }
    },
    isGameOver: function(){
        //is Row checked?
        //is coloumn checked?
        // is crossed checked?
        var isGameOver = false;
        var isRowWin = this.checkRowWin();
        if(isRowWin !== false){
            isGameOver = true;
        }
        return isGameOver;
    },
    switchPlayer: function(){
        if(!this.isGameOver()){
            var otherPlayer = (Object.keys(game.players).filter(function(playerKey){ return (game.activePlayer !== playerKey)}))[0];
            this.setActivePlayer(otherPlayer);
        }else{
            console.log("game over");
        }
        
    },
    start: function(){
        this.setActivePlayer(Object.keys(this.players)[parseInt(Math.random() * (Object.keys(this.players).length))]);
    },
    computerWillMove: function(){
        var rows = this.type;
        var cols  = this.type;
        var element = null;
        do{
            element = this.elements[parseInt(Math.random() * rows)][parseInt(Math.random() * cols)];
        }while(element.get("isSelected"));
        
        var player = this.players[this.activePlayer];
        var elementType = this.players[this.activePlayer].get("elementType");

        var $element = $('#'+element.get('id'));
        element.set('type', elementType);
        element.set('player', this.activePlayer);
        $element.find('.icon').html(Element_Icons_Enum[elementType]);
        element.set('isSelected', true);
        this.switchPlayer();
    },
    isMoveLeft: function(){
        var result = true;
        return true;
    },
    checkRowWin: function(){
        var result = false;
        var winArr = new Array(this.setToWin).fill(1);
        var winStr = winArr.join('');
        for(var r = 0; r < this.type; r++){
            var colArr = [];
            for(var c=0; c < this.type; c++){
                colArr.push(this.elements[r][c].get('isSelected') ? 1:0);
            }
            var colStr = colArr.join('');
            var winIndex = colStr.indexOf(winStr);
            if(winIndex != -1){
                result = this.elements[r][winIndex].get('id');
            }
        }
        return result;
    }
};