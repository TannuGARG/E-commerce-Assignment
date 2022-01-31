const express=require("express")
const app = express();
const cors = require("cors")
const connectdB=require("./config/db")
const router = express.Router();
app.use(cors());
connectdB()
const orderRoute=require('./route/order');

const port = 8000;




app.use("/orders",orderRoute)


app.listen(port, () => {
    console.log(`server running at port ${port}`)

})
// made by tamanna garg










