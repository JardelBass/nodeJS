const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('aluno', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}