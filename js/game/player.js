var PLAYER_TYPE = {
    'PLAYER':0,
    'COMPUTER':1
}
var PlayerTemplate = '<div class="player"><i class="material-icons icon"></i><p class="name"></p></div>';

var Player = Backbone.Model.extend({
    defaults:{
        id:"",
        name:"",
        email:"",
        country:'',
        facebook:{
            id:"",
            connected: false
        },
        type: PLAYER_TYPE.PLAYER ,
        elementType: Element_Type_Enum.NOT_SET,
        gameScore:{
            local:{
                total:0,
                win:0,
                loss:0,
                drawn:0
            },
            online:{
                total:0,
                win:0,
                loss:0,
                drawn:0
            }
        }
    },
    initialize: function(){
        this.set('id',utils.create_uuidv4());
    }
});