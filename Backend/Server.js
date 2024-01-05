const express=require("express")
const { connect } = require("./Database/projectconnection")
const {handler}=require("./Middleware/Error")
const cors=require("cors");
const {router} =require("./Router/projectRoute");
const stripe=require("stripe")(process.env.VITE_STRIPE_SECRET_KEY)

require('dotenv').config({ path: "./config.env" });

const app=express()
app.use(handler)

app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000
connect()
app.use(router)
app.listen(port,()=>{
    console.log(`server is started at port:${port}`);
})