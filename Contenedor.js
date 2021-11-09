const { time } = require("console");
const knex = require("knex");

class Contenedor {
    constructor(config, table) {
        this.table = table;
        this.config = config;
        this.connection = knex(config)
    }

    async save(product) {
        console.log(this.connection)
        try{
            const [id] = await this.connection(this.table).insert(product)
        return id;
        }
        catch{err =>{ console.log(err); throw error } }
        finally{
            //.destroy()
        }
    }
    async getById(id) {
        try{
            const content = await this.connection.from(this.table).select("*").where("id", "=", id);

            console.log(content)
            if(content.lenght === 0 || !content) return null;
            else{
                return content
            }
        }
        catch{ err =>{console.log(err)}}
    }
    async deleteById(id) {
        try{
            await this.connection.from(this.table).del("*").where("id", "=", id)
        }
        catch{
            return "The element does not exist"
        }
    }
    
    
    async deleteAll() {
        try {
            await this.connection.from(this.talbe).del(*)
        }
        catch (err) {
            console.log(err)
        }
    }
    async replace(arr){
        this.deleteAll();
        try{
            await fs.promises.writeFile(`./${this.file}`, JSON.stringify(arr))
        }catch(err){console.log(err)}
    }
}


module.exports = Contenedor
