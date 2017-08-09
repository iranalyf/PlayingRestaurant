let mongoose = require('mongoose');

module.exports = function(){

    let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    let pratoShema = mongoose.Schema({
        nome: {type: String, trim: true},
        valor: {type: Number, trim: true},
        data_cad: {type: Date, default: Date.now},
        restaurante: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurante'
    }});

    return mongoose.model('Pratos', pratoShema);
}