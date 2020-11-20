const express = require("express")
const server = express()


///Importar o banco de dados
const db = require("./database/db.js")

//Tornando a pasta public invisivel
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicação pelo express
server.use(express.urlencoded({ extended: true }))


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

    //req.query: Query strings da url
    //So funciona se vc nao estiver passando os dados por meio do POST mas sim pelo GET
    // console.log(req.query)

    return res.render("create-point.html")
})

//Recebendo os dados do formulario com POST
server.post("/save-point", (req, res) => {
    //req.body : O corpo do formulario
    // console.log(req.body)

    //Inserindo dados na DB
    const query = `
        INSERT INTO  places (
            image,
            name, 
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const body = req.body

    const values = [
        body.image,
        body.name,
        body.address,
        body.address2,
        body.state,
        body.city,
        body.items,
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Succesful register")
        console.log(this)
    }

    //Função que insere dados no DB
    db.run(query, values, afterInsertData)

    return res.render("create-point.html", { saved:true })
})

server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //Se a pesquisa for vazia
        return res.render("search-results.html", { total: 0 })
    }

    //Puxando os dados do banco
    db.all(`
    SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {//rows para retornar uma lista com os registros
        if (err) {
            return console.log(err)
        }
        // console.log("Here are your registers: ")
        // console.log(rows)

        const total = rows.length


        return res.render("search-results.html", { places: rows, total: total })
    })
})

//Abrindo o server na porta 3000
server.listen(4000)