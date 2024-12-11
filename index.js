const express = require('express');
const path = require('path');
const userRoute = require('./routes/user')
const {connectToMongoDb} = require("./db/connect")

const PORT = 8000;

const app = express();

//Connect Database
connectToMongoDb().then(()=>{console.log('MongoDB Connected')}).catch((err)=>{console.log('Error in Connecting MongoDB')});

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('home');
})

app.use("/user",userRoute);

app.listen(PORT,()=>console.log(`Server Started on Port No : ${PORT}`))

