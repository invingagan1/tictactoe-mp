/**
 * Storage Structure
 * tictactoe: {
 *  players:{
 *      me:{},
 *      computer:{}
 *  }
 *  game:{
 *  }
 * }
 */

var storageSrevice = {
    appKey:'tictactoe',
    init: function(){
    },
    /**
     * @params player : is the backbone player model.
     */
    savePlayer: function(player){
        return new Promise((function(resolve, reject){
            try{
                var appData = JSON.parse(window.localStorage.getItem(this.appKey));
                var playerData = JSON.parse(JSON.stringify(player));
                if(undefined === appData || null === appData){
                    appData = {};
                }
                if(undefined === appData.players || null === appData.players) {
                    appData.players = {};
                }
                if(playerData.type === PLAYER_TYPE.PLAYER){
                    appData.players.me = playerData;
                }
                if(playerData.type === PLAYER_TYPE.COMPUTER){
                    appData.players.computer = playerData;
                }
                window.localStorage.setItem(this.appKey, JSON.stringify(appData));
                resolve("saved");
            }
            catch(e){
                reject(e);
            }
            

        }).bind(this) );
    },
    getPlayers: function(){
        return new Promise( (function(resolve, reject){
            try{
                var appData = JSON.parse(window.localStorage.getItem(this.appKey));
                var players = null;
                if(appData !== undefined && appData !== null){
                    if(undefined !== appData.players && null !== appData.players){
                        players = _.clone(appData.players);
                    }
                }
                resolve(players);
            }catch(e){
                reject(e);
            }
        }).bind(this) );
    }
    // saveData: function(key, value){
    //     return new Promise((function(res, rej){
    //         this.getData(this.appKey).then(JSON.parse).then((function(data){
    //             if(data == undefined){
    //                 data = {};
    //             }
    //             data[key] = value;
    //             try{
    //                 window.localStorage.setItem(this.appKey, JSON.stringify(data));
    //                 res("saved");
    //             }catch(e){
    //                 rej(e);
    //             }
    //         }).bind(this) ).catch(function(e){
    //             rej(e);
    //         });
    //     }).bind(this));
    // },
    // getData: function(key){
    //     return new Promise(function(res, rej){
    //         try{
    //             res(JSON.parse(window.localStorage.getItem(key)));
    //         }
    //         catch(e){
    //             rej(e);
    //         }  
    //     });
    // }
}