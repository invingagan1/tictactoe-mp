var storageSrevice = {
    appKey:'tictactoe',
    saveData: function(key, value){
        return new Promise((function(res, rej){
            this.getData(this.appKey).then(JSON.parse).then((function(data){
                if(data == undefined){
                    data = {};
                }
                data[key] = value;
                try{
                    window.localStorage.setItem(this.appKey, JSON.stringify(data));
                    res("saved");
                }catch(e){
                    rej(e);
                }
            }).bind(this) ).catch(function(e){
                rej(e);
            });
        }).bind(this));
    },
    getData: function(key){
        return new Promise(function(res, rej){
            try{
                res(JSON.parse(window.localStorage.getItem(key)));
            }
            catch(e){
                rej(e);
            }  
        });
    }
}