module.exports = function(app){

    let restaurante = app.controllers.RestauranteController;

    app.route("/restaurantes")
        .get(restaurante.pesquisa);

    app.route("/restaurantes/novo")
        .get(restaurante.form)
        .post(restaurante.create);

    app.route("/restaurantes/:id")
        .get(restaurante.form)
        .post(restaurante.create);

    
}