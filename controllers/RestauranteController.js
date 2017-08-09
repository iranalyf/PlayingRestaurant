module.exports = function(app){

    let Restaurante = app.models.Restaurante;

    let RestauranteController = {
        form: function(req,res){
            if(!req.params.id){
                res.render("restaurantes/cadastroRestaurante");
            }
            Restaurante.findById(req.params.id).then(function(rPersistente){
                if(rPersistente != null){
                    res.render("restaurantes/cadastroRestaurante",{restaurante: rPersistente})
                }
                throw Error("Restaurante não encontrado");
            });
            
        },

        create: function(req,res){         
            let restaurante  = new Restaurante(req.body);
    
            restaurante.save(function(err){
                if(err){
                    req.flash("erro","Erro ao salvar");
                    res.render("restaurantes/cadastroRestaurante");
                }else{
                    req.flash("info","Restaurante cadastrado com sucesso..");
                    res.redirect("/restaurantes/novo");
                }
            });
        },

        pesquisa: function(req,res){
             if(req.params == null){
            Restaurante.find(function(err,data){
                if(err){
                    req.flash("erro", "Erro ao buscar restaurantes"+ err);
                    res.redirect("/restaurantes");
                }else{
                    res.render("restaurantes/pesquisaRestaurantes", {restaurantes: data});
                }
            }
            );
            }else{
                var nomeRestaurante = req.params.nomeRestaurante;
                Restaurante.find({"nome": new RegExp('/'+nomeRestaurante+'/i') },function(err,data){
                    if(err){
                        
                    }
                    res.render("restaurantes/pesquisaRestaurantes",{restaurantes: data});
                });
                    
            }
        }
    }
    return RestauranteController;
}