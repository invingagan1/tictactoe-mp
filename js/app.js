var app = {
    router: null,
    content:null,
    players:{
        computer:null,
        me:null,
    },
    views: {
        header: null,
        footer: null,
        home: null,
        game: null,
        player: null,
        settings: null,
        signUp: null
    },
    init: function(){
        this.router = new Router();
        
        this.initViews();      
        Backbone.history.start();
        
        storageSrevice.getPlayers().then( (function(players){
            if(players === null || players === undefined){
                app.router.navigate('setup',{trigger: true});
            }else{
                for(var p in players){
                    app.players[p] = new Player(players[p]);
                }
                app.router.navigate('home',{trigger: true});
            }
        }).bind(this) ).catch( (function(e){
            console.error(e);
            app.router.navigate('setup',{trigger: true})
        }).bind(this) );
    },
    initViews: function(){
        this.content = $("#content");
        this.views.header = new Header();
        $('header').html(this.views.header.el);

        this.views.footer = new Footer();
        $("footer").html(this.views.footer.el);
    },
    goToHome: function(){
        if(this.views.home === null){
            this.views.home = new Home();
        }
        this.content.html(this.views.home.el);    
    },
    playGame: function(){
        // if(this.views.game === null){
            this.views.game = null;
            this.views.game = new GameView();
        // }
        this.content.html(this.views.game.el);
    },
    goToPlayer: function(){
        if(this.views.player === null){
            this.views.player = new Player();
        }
        this.content.html(this.views.player.el);
    },
    goToSettings: function(){
        if(this.views.settings === null){
            this.views.settings = new Settings();
        }
        this.content.html(this.views.settings.el);
    },
    signUpPlayer:function(){
        if(this.views.signUp === null){
            this.views.signUp = new SignUp();
        }
        this.content.html(this.views.signUp.el);
    }
}
$(document).ready(function(){
    app.init();
})