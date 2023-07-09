"use strict";


(()=>{

    
const express= require("express");
const router= express.Router();

const login_user= require("../controllers/methods/loginUser");
const signin_user= require("../controllers/methods/createUser");


router.post("/signinuser",signin_user);
router.post("/loginuser",login_user);


module.exports= router;

})();