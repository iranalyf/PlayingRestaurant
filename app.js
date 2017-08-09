const express      = require('express'),
    path         = require('path'),
    favicon      = require('static-favicon'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session'),
    load         = require('express-load'),
    mongoose     = require('mongoose')
    moment       = require('moment'),
    flash        = require('express-flash');

mongoose.connect("mongodb://localhost/restaurante", function(err){

    if(err){
        console.log("Erro ao conectar no Mongo db:" + err);
    }else{
        console.log("Conexão com o mongodb efetuada com Sucesso");
    }
});

const app = express();

//middleware
const erros = require('./middleware/erros');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'sua-chave-secreta' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());


//middleware
//app.use(erros.notfound);
//app.use(erros.serverError);

load("models")
    .then("controllers")
    .then("routes")
    .into(app);

app.listen(3000, function() {
    console.log('Express server listening on port 8000');
});
