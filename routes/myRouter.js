const express = require("express");
const router = express.Router();
//เรียกใช้งานโมเดล
const Product = require('../models/products')

//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products') //ตำแหน่งที่อัพโหลดรูปภาพ
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg") //ป้องกันชื่อไฟล์ซ้ำกัน
    }
})

//เริ่มต้นอัพโหลด
const upload = multer({
    storage:storage
})

router.get("/", (req, res) => {
  Product.find().exec((err,doc)=>{
    res.render("index", {products: doc}); 
  })
  
});

router.get("/addForm",(req,res)=>{
    res.render('form')
})

router.get("/manage",(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render("manage", {products: doc}); 
      })
})

router.post('/insert',upload.single("image"),(req,res)=>{
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })
    Product.saveProduct(data,(err)=>{
        if(err) console.log(err)
    })
    res.redirect('/')
})

module.exports = router;
