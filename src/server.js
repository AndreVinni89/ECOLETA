const express = require("express")
const server = express()


///Importar o banco de dados
const db = require("./database/db.js")



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

    //Puxando os dados do banco
    db.all(`
        SELECT * FROM places`, function (err, rows) {//rows para retornar uma lista com os registros
        if (err) {
            return console.log(err)
        }
        console.log("Here are your registers: ")
        console.log(rows)

        const total = rows.length 


        return res.render("search-results.html", {places : rows, total: total})
    })    
})


//Abrindo o server na porta 3000
server.listen(3000)