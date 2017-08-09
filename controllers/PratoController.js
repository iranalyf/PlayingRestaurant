module.exports = function(app){

    let Prato = app.models.Prato; 

    let Restaurante = app.models.Restaurante;

    let PratoController = {

        pesquisa: function(req,res){
            Prato.find(function(err, data){
                if(err){
                    //tratar erro
                }else{
                    res.render("pratos/pesquisaPratos", {pratos: data});
                }
            });
        },

        form: function(req,res){
            Restaurante.find(function(err, data){
                if(err){
                    //tratar 
                }else{
                    res.render("pratos/cadastroPrato", {restaurantes: data});
                }
            });
            
        },

        create: function(req,res){
            let prato = new Prato(req.body);
            
            prato.save(function(err){
                if(err){

                }else{
                    req.flash("info","Prato " + prato.nome + " cadastrado com sucesso!");
                    res.redirect("/pratos/novo");
                }
            });
        }
    }
    return PratoController;  
}