var Settings = Backbone.View.extend({
    initialize: function(){
        this.render()
    },
    render: function(){
        this.$el.html(this.template);
        return this;
    },
    template: '<h1>Settings</h1>'
});