const myOptions = {
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        user:"root",
        password:"",
        database:"ecommerce"
    },
    pool: {min: 0, max: 7}
};

const sqliteOptions = {
    client:"sqlite3",
    connection: {filename: "./DB/ecommerce.sqlite"},
    useNullAsDefault: true
}

module.exports ={
    myOptions, sqliteOptions
}