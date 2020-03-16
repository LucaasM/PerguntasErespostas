const express = require('express') // Importando express
const app = express(); // Instanciando o express

// Informando o motor gerador de HTML utilizado
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.render("index")
})

// Iniciando servidor na porta 8080
app.listen(8080, () => {
    console.log("Servidor rodando")
})