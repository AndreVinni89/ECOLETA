//Importar a dependencia do sqlite3

const sqlite = require("sqlite3").verbose()

//criar objeto de operações no banco de dados
const db = new sqlite.Database("./src/database/database.db")

module.exports = db

//Utilizar o objeto do banco

// db.serialize(() => {
//     //CRIAR UMA TABELA 
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places(
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // //Inserir dados
//     // const query = `
//     //     INSERT INTO  places (
//     //         image,
//     //         name, 
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
//     //     "Paperside",
//     //     "Guilherme gemballa, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Succesful register")
//     //     console.log(this)
//     // }

//     // //Função que insere dados no DB
//     // db.run(query, values, afterInsertData)

    //Consultar dados
    // db.all(`
    //     SELECT * FROM places`, function (err, rows) {//rows para retornar uma lista com os registros
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Here are your registers: ")
    //     console.log(rows)
    // })

    //Deletar dados
    // db.run(`
    //     DELETE FROM places WHERE ID = ?
    
    // `, [9], function (err) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(`Succesful delete register!`)
    // })
// })

