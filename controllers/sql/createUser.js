"use strict";

// const sqlstring = require("sqlstring")
const helper = require("../../helper/index");
(()=>{
module.exports= async(obj)=>{
    try {
       
        const output = await  helper.mysqlHelper.query(`INSERT INTO users (username,password) VALUES ('${obj.username }','${obj.password}')`);
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