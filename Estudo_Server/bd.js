const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('aluno', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

const AlunoDados = sequelize.define('alunos', {
    nome: DataTypes.STRING,
    nota1: DataTypes.DOUBLE,
    nota2: DataTypes.DOUBLE,
    media: DataTypes.DOUBLE,
});

AlunoDados.sync({force: true});


//tratamendo de conequição banco 
/*
sequelize.authenticate().then(function(){
    console.log('Server ok');
}).catch(function(error){
    console.error('Server Erro:', error);
});
*/
