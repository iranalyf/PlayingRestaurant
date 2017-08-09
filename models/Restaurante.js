let mongoose = require('mongoose');

module.exports = function(){

    let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    let restauranteSchema = mongoose.Schema({
        nome : {type: String, trim: true}
    });

    return mongoose.model('Restaurantes',restauranteSchema);
}