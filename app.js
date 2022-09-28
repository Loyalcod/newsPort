const express = require("express")
const app = express()


const port = 7000



app.get('/',(req,res)=>{
    res.send("hello word")
})


app.listen(port,()=>{
    console.log("this server is running")
})