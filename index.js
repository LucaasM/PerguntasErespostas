const express = require('express') // Importando express
const app = express(); // Instanciando o express

// Informando o motor gerador de HTML utilizado
app.set("view engine", "ejs")

app.use(express.static("public")) // Informando a pasta dos arquivos estaticos


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// Criando a rota para acessar dados do front
app.post("/salvarpergunta", (req, res) => {
    res.send("Formulario recebido")
})

// Iniciando servidor na porta 8080
app.listen(8080, () => {
    console.log("Servidor rodando")
})