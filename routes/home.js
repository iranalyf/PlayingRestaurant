module.exports  = function(app){

    let home = app.controllers.HomeController;

    app.route("/home")
        .get(home.index);

    app.route("/total")
        .get(home.totalPorData);

    app.route("/totalPorMes")
        .get(home.totalPorMes);
}