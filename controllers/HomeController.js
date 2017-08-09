module.exports =  function(app){

    let model = app.models.Prato;

    let HomeController = {
        index : function(req,res){
            res.render("index");
        },

        totalPorData: function(req,res){
            model.find(function(err,data){
                if(err){
                    console.log(err);
                }            
              
                console.log(data);
                res.json(data);
            });
            
        },

        totalPorMes: function(req,res){
            model.find(function(err,data){

            });
        }
    }
    
    return HomeController;
}