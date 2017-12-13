var Header = Backbone.View.extend({
    id:'header',
    initialize: function(){
        this.render();
    },
    events: {
        'click .game-icon-panel' : 'gotoHome'
    },
    render: function(){
        this.$el.html(this.template);
        return this;
    },
    template:   '\
                <div class="game-icon-panel">\
                    <i class="material-icons game-icon">apps</i>\
                </div>\
                <h2 class="game-title">Tic Tac Toe</h2>',
    gotoHome: function(){
        app.goToHome();
    }
});