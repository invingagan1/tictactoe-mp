var Element_Type_Enum = {
    NOT_SET:0,
    CROSS: 1,
    CIRCLE: 2
};
var Element_Icons_Enum = ['','cancel','radio_button_checked'];
var Element_Template = '<div class="element"><i class="material-icons icon"></i></div>';
var Element = Backbone.Model.extend({
    defaults:{
        id:0,
        row:0,
        col:0,
        type: Element_Type_Enum.NOT_SET,
        isSelected: false,
        player:null
    },
    initialize: function(){
    }
});


