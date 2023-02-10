import express from 'express';


const app = express();



app.get('/',(req, res)=>{
    res.send("this node app is running on your machine even if you dont have node installed.");
})



app.listen(3000,()=>{
    console.log("app started at 3000 port");
})
