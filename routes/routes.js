const express = require('express');
const router = express.Router();
const {myOptions, sqliteOptions } = require('../options/options.js')


const Contenedor = require("../Contenedor.js")
const objProduct = new Contenedor(myOptions,"products")


// router.get("/", async (req, res) => {
//     const arrProducts = await objProduct.getAll()
//     res.render("index", {arr: arrProducts})
// })

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const arrProducts = await objProduct.getById(id)
    res.send({ arr: arrProducts })
})

router.post("/", async (req, res) => {
    const product = req.body;
    const idProduct = await objProduct.save(product)
    
    res.send({"Id":idProduct})
})



module.exports = router;