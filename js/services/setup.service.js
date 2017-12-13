var setupService = {
    setup: function(name){
        return new Promise(function(resolve, reject){
            storageSrevice.saveData("name",name).then(resolve).catch(reject);
        });
    }
}