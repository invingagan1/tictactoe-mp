var SignUp = Backbone.View.extend({
    id: 'signup',
    initialize: function(){
        this.render();
    },
    events:{
        'click .next':'setup'
    },
    render: function(){
        this.$el.html(this.template);
        return this;
    },
    template:   '<input type="text" name="name" placeholder="Pick a name">\
                    <div class="btn fab">\
                    <i class="material-icons next">arrow forward</i>\
                </div>',
    setup: function(){
        var name = this.$el.find('input[name="name"]').val();
        if(name !== undefined && name !=="" && name.charAt(0) !== " " ){
            setupService.setup(name).then(function(){
                app.router.navigate('home', true)
            }).catch(function(){
                alert("Could not setup! try again.");
            });
        }else{
            alert("Pick a name first.");
        }
        
    }
});