const express = require("express")
const server = express()

//Tornando a pasta public invisivel
server.use(express.static("public"))

//Utilizando Template engine nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})




//definindo os caminhos do fluxo de navegação
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})


//Abrindo o server na porta 3000
server.listen(3000)