const express = require("express");
const app = express();
const path =require("path");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const soma = require(__dirname+"/public/lib/caculadora.js");

//configuração
    //Declaração do meu diretorio Public
    app.use(express.static(path.join(__dirname+"/public")));
    app.set('views', path.join(__dirname, 'views'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Templete
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

    //Rota
    app.get('/cad', function(req,res){
        res.render('index');
    });

    app.post('/add',function(req,res){
        var nomeAluno = req.body.nome;
        var nota1 = parseInt(req.body.not1);
        var nota2 = parseInt(req.body.not2);
        res.send(soma.mediaAluno(nomeAluno, nota1, nota2));
    });

    

    app.listen(3000, function(){
        console.log("Servidor Rodando na URL: http://localhost:3000/ ");
    });
//exe server codigo (nodemon + diretorio) 
