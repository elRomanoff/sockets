const express = require("express");
const app = express();
const {myOptions, sqliteOptions} = require("./options/options.js")

const Contenedor = require("./Contenedor.js")


const objMessages = new Contenedor(myOptions, "messages")

app.set('port', process.env.PORT || 3000);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/static'));




//rutas
app.use(require('./routes/routes.js'))

/////////////////////////////////

//server start
const server = app.listen((app.get("port")), () => {
    console.log("el servidor esta inicializado")
})

app.on("error", error =>{
    console.log(error)
})



// //websockets 
const socketIO = require("socket.io")
const io = socketIO(server)
io.on("connection", async (socket) => {
    console.log("new connection",socket.id)

    //al que inicia la app, le pasamos todos los mensajes de la "database"    
    socket.emit("init", {data: updatedData})


    socket.on("update",(element)=>{
        io.sockets.emit("update",element)
    })

    socket.on("new-message",async(element)=>{
        let date = new Date()
        element.time = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        io.sockets.emit("new-message", element)
        await objMessages.save(element)
    })
})
