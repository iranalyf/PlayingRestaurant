module.exports = function(app){

    let prato = app.controllers.PratoController;

    app.route("/pratos")
        .get(prato.pesquisa);

    app.route("/pratos/novo")
        .get(prato.form)
        .post(prato.create);
}