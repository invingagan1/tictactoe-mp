var setupService = {
    setup: function(name){
        return new Promise(function(resolve, reject){
            app.players.computer = new Player({
                name:"computer",
                type: PLAYER_TYPE.COMPUTER                
            });
            app.players.me = new Player({
                name: name,
            });
            storageSrevice
                .savePlayer(app.players.computer)
                .then(function(){
                    storageSrevice
                        .savePlayer(app.players.me)
                        .then(function(){
                            resolve(true);
                        })
                        .catch(function(e){reject(e);});
                })
                .catch(function(e){reject(e);});
        });
    }
};