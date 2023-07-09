const express = require("express");
const mysqlHelper= require('./helper/mysqlHelper');

const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');



const app = express();
const mainroute = require("./routes/mainroute");
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.json());




app.use("/",mainroute);


app.listen(process.env.PORT 
    ,()=>{
    mysqlHelper.init();  
    console.log(`server running at port ${process.env.PORT} `);
})

