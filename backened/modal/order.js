
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const OrderSchema=new Schema({

    company:{
        type:String,
        
        
    },
    describe:{
        type:String,
        
    },

    cost:{
        type:String,
    },
   
    size:{
        type:Number,
       
    },
    quantity:{
        type:Number,
        default:1
    },
    orderDate:{
        type:Date,
    }
    
})

const orders=mongoose.model('orders',OrderSchema)

module.exports=orders;
// made by tamanna garg