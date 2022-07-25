const path =require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname+"/public")));


//declaração de index
app.get("/",function(req,res){
    res.sendFile(__dirname+"/views/index.html");
});

//declaração da rota sobre 
app.get("/sobre",function(req,res){
    res.sendFile(__dirname+"/views/sobre.html");
});


//declaração da rota ola com parametro
app.get("/ola",function(req,res){
    //O Comando (send) so pode se declara um vez em cada rota
    res.sendFile(__dirname+"/views/ola.html");
    //res.send("Nome: "+req.params.nome+" Idade: "+req.params.idade);
});

//esta linhda de codego de esta em baixa de todo
//porta de server 3000 
app.listen(3000, function(){
    console.log("Servidor Rodando na URL: http://localhost:3000/ ");
});

//exe server codigo (nodemon + diretorio) 
