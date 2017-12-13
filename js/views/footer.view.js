var Footer = Backbone.View.extend({
    id:'footer',
    initialize: function(){
        
        this.render();
    },
    events: {
        'click .home' : function(){app.goToHome()},
        'click .game' : function(){app.playGame()},
        'click .person': function(){app.goToPlayer()},
        'click .settings' : function(){app.goToSettings()},
    },
    render: function(){
        this.$el.html(this.template);
        app.router.on("route", (function(route){
            if(route === 'signUpPlayer'){
                this.hide();
            }else{
                this.show();
            }
        }).bind(this))
        return this;
    },
    template:   '\
                <div class="footer-icon-panel home">\
                    <i class="material-icons">home</i>\
                </div>\
                    <div class="footer-icon-panel game">\
                    <i class="material-icons">games</i>\
                </div>\
                <div class="footer-icon-panel person">\
                    <i class="material-icons">person</i>\
                </div>\
                <div class="footer-icon-panel settings">\
                    <i class="material-icons">settings</i>\
                </div>\
                ',
    gotoHome: function(){
        app.goToHome();
    },
    hide:function(){
        this.$el.hide();
    },
    show: function(){
        this.$el.show();
    }
});