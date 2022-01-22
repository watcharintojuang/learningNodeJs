const express = require('express')
const router = express.Router()
const path = require('path')

const indexPage = path.join(__dirname,"../templates/index.html")

router.get("/",(req,res)=>{
    res.status(200)
    res.type("text/html")
    res.sendFile(indexPage)
})

router.get("/product/:id",(req,res)=>{
    //res.sendFile(path.join(__dirname,"../templates/product1.html"))
    const myParam = req.params.id
    if(myParam === "1"){
        res.sendFile(path.join(__dirname,"../templates/product1.html"))
    }else if(myParam === "2"){
        res.sendFile(path.join(__dirname,"../templates/product2.html"))
    }else if(myParam === "3"){
        res.sendFile(path.join(__dirname,"../templates/product3.html"))
    }else{
        res.redirect('/')
    }
})

module.exports = router