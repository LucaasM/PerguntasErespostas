const express = require('express') // Importando express
const app = express(); // Instanciando o express

const bodyParser = require('body-parser')

const connection = require("./database/database") // Importando banco de dados criado

// Autentificando o BD
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com BD")
    })
    .catch((msgError) => {
        console.log(msgError)
    })

// Informando o motor gerador de HTML utilizado
app.set("view engine", "ejs")

app.use(express.static("public")) // Informando a pasta dos arquivos estaticos

// Configurando bodyparser
app.use(bodyParser.urlencoded({ extended: false })) // Permitir a codificação dos dados enviados do front
app.use(bodyParser.json()) // Permitindo a leitura de dados do tipo json


// Rotas
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// Criando a rota para acessar dados do front
app.post("/salvarpergunta", (req, res) => {
    // Recebendo os dados do front-end
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send("Formulario recebido")
})

// Iniciando servidor na porta 8080
app.listen(8080, () => {
    console.log("Servidor rodando")
})