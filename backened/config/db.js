
const mongoose=require("mongoose");

MONGO_URI="mongodb://localhost:27017/Ecommerce";
const connectdB=async()=>{
    try{
        mongoose.connect(MONGO_URI,{
            
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        // console.log(process.env.PORT)
        console.log("Mongo db connection sucesss")
        
    }catch(error){
        
        console.log(error);
        process.exit(1)
        
    }
}

module.exports=connectdB;
// made by tamanna garg