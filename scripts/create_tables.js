const {myOptions, sqliteOptions} = require("../options/options.js")

const knexMySQL = require("knex")(myOptions)
const knexSQLite = require("knex")(sqliteOptions)


//PRODUCTS
knexMySQL.schema.createTable("products",(table) =>{
    table.increments("id");
    table.string("name");
    table.string("description")
    table.integer("code")
    table.string("photo")
    table.integer("price")
    table.integer("stock")
})
.then(()=>console.log("Table created"))
.catch((error)=> {console.error(error); throw error;})
.finally(()=> knexMySQL.destroy())

knexSQLite.schema.createTable("products", (table) => {
    table.increments("id");
    table.string("name");
    table.string("description")
    table.integer("code")
    table.string("photo")
    table.integer("price")
    table.integer("stock")
})
    .then(() => console.log("Table created"))
    .catch((error) => { console.error(error); throw error; })
    .finally(() => knexSQLite.destroy())




//MESSAGES
knexMySQL.schema.createTable("messages", (table) => {
    table.increments("id");
    table.string("name");
    table.string("message")
})
    .then(() => console.log("Table created"))
    .catch((error) => { console.error(error); throw error; })
    .finally(() => knexMySQL.destroy())

knexSQLite.schema.createTable("messages", (table) =>{
    table.increments("id");
    table.string("name");
    table.string("message")
})
    .then(() => console.log("Table created"))
    .catch((error) => { console.error(error); throw error; })
    .finally(() => knexSQLite.destroy())