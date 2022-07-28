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
        res.render('media');
    });

    app.get('/home',function(req,res){
        const aprovacao = req.body.aprovacao;
        res.render('home', aprovacao);
    });

    app.post('/add',function(req,res){
        const nomeAluno = req.body.nome;
        const nota1 = parseInt(req.body.not1);
        const nota2 = parseInt(req.body.not2);
        const aprovacao = (soma.mediaAluno(nomeAluno,nota1,nota2));

        res.render('home',{apv: aprovacao} );
        

        //res.render('home', aprovacao);
        //redireciona rota
        //res.redirect('/home', aprovacao);

        //res.send("Aluno: "+aprovacao.nome);
    });




    //criando meu server
    app.listen(3000, function(){
        console.log("Servidor Rodando na URL: http://localhost:3000/ ");
    });
//exe server codigo (nodemon + diretorio) 
