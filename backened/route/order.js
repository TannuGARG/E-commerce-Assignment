const express=require('express');
const router=express.Router();
const orders = require('../modal/order');
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/',async (req,res)=>{
    console.log(req.body)
   
    try {
        const orderData= await orders.create({
            company : req.body.posts.company,
            describe : req.body.posts.describe,
            cost : req.body.posts.Cost,
            size: req.body.size,
            quantity:req.body.quantity,
            orderDate:req.body.date
            
        });
        res.json({
            status : "Success",
            data : orderData
        })
    } catch(err) {
        res.json({
            status : "Failed to create order",
            message : err.message
        })
    }
})
router.get("/",async(req,res)=>{
    const orderdetail=await orders.find()
    res.json({
        "status":"successfully fetched",
        "content":orderdetail
    })
    

})
router.delete("/",async(req,res)=>{

    const orderdetail=await orders.deleteOne({_id:req.body.id})
    res.json({
        "content":"Deleted Successfully From Database"
    })
})

module.exports = router;

// made by tamanna garg