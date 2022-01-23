const express = require("express");
const router = express.Router();
//เรียกใช้งานโมเดล
const Product = require('../models/products')


router.get("/", (req, res) => {
  const products = [
      {name:'Computer',price:25000,image:'/images/products/product1.png'},
      {name:'เสื้อผ้า',price:299,image:'/images/products/product2.png'},
      {name:'หูฟัง',price:4000,image:'/images/products/product3.png'}
  ]
  res.render("index", {products: products});
});

router.get("/addForm",(req,res)=>{
    res.render('form')
})

router.get("/manage",(req,res)=>{
    res.render('manage')
})

router.post('/insert',(req,res)=>{
    console.log(req.body)
    res.render('form')
})

module.exports = router;
