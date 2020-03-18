const sequelize = require("sequelize") // Importando a biblioteca para trabalha com banco de dados em JS
const connection = new sequelize("guiaperguntas", "root", "flora100", { // Connectando o banco de dados
    host: 'localhost',
    dialect: 'mysql'

})



module.exports = connection