var Home = Backbone.View.extend({
    id:'home',
    initialize: function(){
        this.render();
    },
    events: {
        "click .solo": "playSolo"
    },
    render: function(){
        this.$el.html(this.template);
        return this;
    },
    template:   '   <button class="btn solo">Play solo</button>\
                    <button class="btn mp">Play online</button>\
                    <button class="btn cf">Challenge friend</button>',
    playSolo: function(){
        app.router.navigate("game/solo", {trigger: true});
    }
});