const bd = require('./bd');

//Criando tabelha alunos

const AlunoDados = bd.sequelize.define('alunos', {
    nome: bd.Sequelize.STRING,
    nota1: bd.Sequelize.DOUBLE,
    nota2: bd.Sequelize.DOUBLE,
    media: bd.Sequelize.DOUBLE,
});

//AlunoDados.sync({force: true});
module.exports = AlunoDados;