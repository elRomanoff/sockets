const express = require('express');
const router = express.Router();
const {myOptions, sqliteOptions } = require('../options/options.js')


const Contenedor = require("../Contenedor.js")
const objProduct = new Contenedor(myOptions,"products")



router.get("/:id", async (req, res) => {
    const id = req.params.id
    const arrProducts = await objProduct.getById(id)
    res.send({ data: arrProducts })
})

router.post("/", async (req, res) => {
    const product = req.body;
    const idProduct = await objProduct.save(product)
    
    res.send({data:idProduct})
})
router.delete("/", async (req,res) =>{
    await objProduct.deleteAll();
    res.send({data: "All products were successfully deleted"})
})

router.delete("/:id", async (req,res) =>{
    const id = req.params.id;
    const data = await objProduct.deleteById(id);
    res.send({data: data})
})

router.put("/:id", async (req,res) =>{
    const id = req.params.id;
    const objUpdate = req.body
    const data = await objProduct.update(id,objUpdate)
    res.send({data:data})
})


module.exports = router;
