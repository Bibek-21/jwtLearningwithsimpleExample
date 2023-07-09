"use strict";

// const sqlstring = require("sqlstring")
// const login= require("../methods/createUser");

const helper = require("../../helper/index");
(()=>{
module.exports= async(obj,token)=>{
    try {
       
        const output = await  helper.mysqlHelper.query(`update users set token = '${token}' where username= '${obj.username}'  `)
              if(output[0].affectedRows>0){
            return true

        }
        else{
            return false
        }
    } catch (error) {
       throw error;   
    }
}

})();