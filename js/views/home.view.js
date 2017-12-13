var Home = Backbone.View.extend({
    id:'home',
    initialize: function(){
        this.render();
    },
    events: {
    },
    render: function(){
        this.$el.html(this.template);
        return this;
    },
    template:   '<button class="btn">Play solo</button>\
                <button class="btn">Play online</button>\
                <button class="btn">Challenge friend</button>',
    
});