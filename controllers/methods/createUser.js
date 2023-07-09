"use strict";

const verifyInfo = require("../../helper/validate");
const createUser= require("../sql/createUser")
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
                const content = await createUser(obj);

                if (content==true) {
    
                   
                        res.status(200).send({
                            message: ' success ',
                            success: true
                        })
                    
                    }
                
                else {
    
                    res.status(400).send({
                        message: ' failed',
                        success: true
                    })
                }
            
          
        } catch (error) {
            console.log(error);
        }
    }

})();