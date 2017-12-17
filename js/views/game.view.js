var game = null;
var board_row_template = '<div class="row"></div>';

var GameView = Backbone.View.extend({
    id:'game-view',
    $template:null,
    $players:null,
    $board: null,

    initialize: function(){
        this.$template = $(this.template);
        
        game = new Game(Game.typeEnum._3X3, _.clone(app.players));
        
        this.createPlayers();
        this.createGameBaord();

        this.render();
    },
    events:{
        'click .element' : 'play'
    },
    render: function(){
        this.$el.html(this.$template);
        return this;
    },
    play: function(){
        console.log(this)
    },
    createPlayers: function(){
        this.$players = this.$template.find('.player-section');
        for(var p in game.players){
            var player = game.players[p];
            var $player = $(PlayerTemplate);
            $player.find('.icon').html(Element_Icons_Enum[player.get('elementType')]);
            $player.find('.name').html(player.get('name'));
            $player.addClass(game.activePlayer === p ? 'active' :'');
            this.$players.append($player);
        }
    },
    createGameBaord: function(){
        console.log(game.elements.length);
        this.$board = this.$template.find('.board');
        for(var r = 0; r < game.elements.length ; r++){
            
            var row = game.elements[r];
            var $row = $(board_row_template);

            for(var c = 0; c < row.length; c++){
                var element = game.elements[r][c];
                var $element = $(Element_Template);
                $element.data('elementId', element.get('id'));
                $row.append($element);
            }
            this.$board.append($row);
        }
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var boardWidth = 0;
        var boardHeight = 0;
        if(windowWidth >= windowHeight){
            boardWidth = windowHeight;
            boardHeight = windowHeight;
        }else{
            boardWidth = windowWidth;
            boardHeight = windowWidth;
        }
        var elementWidth = (boardWidth /  game.type) - 4;
        this.$board.width(boardWidth).height(boardHeight).find('.element').width(elementWidth).height(elementWidth)
    },
    template : '<div id="game-arena"><div class="player-section"></div><div class="board"></div><div>'
});