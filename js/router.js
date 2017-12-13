var Router = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'game/:type':'game',
        'player':'player',
        'settings':'settings',
        'signup': 'signUpPlayer',
        ":whatever": "noRoute"
    },
    home: function(){
        app.goToHome();
    },
    game: function(type){
        app.playGame(type);
    },
    player: function(){
        app.goToPlayer();
    },
    settings: function(){
        app.goToSettings();
    },
    signUpPlayer: function(){
        app.signUpPlayer();
    },
    noRoute: function(){
        app.router.navigate('signup', {trigger: true});
    }
});