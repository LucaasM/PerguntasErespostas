const sequelize = require("sequelize");
const connection = require('./database');


// Criando a tabela no banco de dados
const Pergunta = connection.define('pergunta', {
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    }
});

// Sincronizando a tabela no banco de dados
Pergunta.sync({ force: false }).then(() => {})


module.exports = Pergunta;