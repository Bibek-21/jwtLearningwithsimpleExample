"use strict";

// const sqlstring = require("sqlstring")
const helper = require("../../helper/index");
(()=>{
    // function compareFunction(rows) {
    //     for (let i = 0; i < rows.length - 1; i++) {
    //       for (let j = i + 1; j < rows.length; j++) {
    //         compareFunction(rows[i], rows[j]);
    //       }
    //     }
    //   }
      
module.exports= async(obj)=>{
    try {
       
         const [data] = await  helper.mysqlHelper.query(`Select * from users`);
        //  console.log(data)
        const resultData=data.filter((item)=>{
            return item.username===obj.username && item.password===obj.password;
        })
    //   console.log(resultData);
      if(resultData.length!==0){
        return true;
      }

        // if(obj.username == compareUsername && obj.password == comparePassword ){
        //     return true;
        // }
        else{
            return false;
        }
        
    } catch (error) {
       throw error;   
    }
}

})();