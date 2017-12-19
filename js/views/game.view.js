var game = null;
var board_row_template = '<div class="row"></div>';

var GameView = Backbone.View.extend({
    id:'game-view',
    $template:null,
    $players:null,
    $board: null,

    initialize: function(){
        this.$template = $(this.template);
        
        game = new Game(Game.typeEnum._ , _.clone(app.players));
        
        this.createPlayers();
        this.createGameBaord();

        this.render();
    },
    events:{
    },
    render: function(){
        this.$el.html(this.$template);
        setTimeout(game.start.bind(game),100);
        return this;
    },
    createPlayers: function(){
        this.$players = this.$template.find('.player-section');
        for(var p in game.players){
            var player = game.players[p];
            var $player = $(PlayerTemplate);
            $player.attr('key', p);
            $player.find('.icon').html(Element_Icons_Enum[player.get('elementType')]);
            $player.find('.name').html(player.get('name'));
            this.$players.append($player);
        }
    },
    createGameBaord: function(){
        this.$board = this.$template.find('.board');
        for(var r = 0; r < game.elements.length ; r++){
            
            var row = game.elements[r];
            var $row = $(board_row_template);

            for(var c = 0; c < row.length; c++){
                var element = game.elements[r][c];
                var $element = $(Element_Template);
                $element.attr('id', element.get('id'));
                $element.data('elementId', element.get('id'));
                $element.click(function(){game.playMove(this)});
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
        this.$board.width(boardWidth).height(boardHeight).find('.element').width(elementWidth).height(elementWidth);
        this.$board.width(boardWidth).height(boardHeight).find('.element > i').css({'font-size': elementWidth})
    },
    template : '<div id="game-arena"><div class="player-section"></div><div class="board"></div><div>',
    updateActivePlayer: function(activePlayer){
        this.$players.find('.player').removeClass('active');
        this.$players.find('[key='+activePlayer +']').addClass(game.activePlayer === activePlayer ? 'active' :'');
    }
});