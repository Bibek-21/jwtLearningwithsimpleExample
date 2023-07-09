"use strict";

// const helper = require("../../helper/index");
// const { hashpassword } = require('../../helper/hashPassword');
//const hashpass =require("../../helper/hashPassword")
const loginuser = require("../sql/loginUser");
const insertToken= require("../sql/insertToken")
const jWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

(() => {
    module.exports = async (req, res, next) => {
        try {
            //  const passwordhash = await hashpassword(req.body.Password)
           
            const obj = {
                username: req.body.username,
                password: req.body.password,
            };
            const token = jWT.sign({obj},process.env.JWT_SECRET_KEY,{expiresIn:'300s'});
            const info = await loginuser(obj);
            if (info==true) {
                insertToken(obj,token);

               
                    res.status(200).send({
                        message: 'Login success ',
                        success: true,
                        token: token
                    })
                
                }
            
            else {
                insertToken(obj,'n/a');


                res.status(400).send({
                    message: 'Login failed',
                    success: false,
                    token: "no token available"
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

})();