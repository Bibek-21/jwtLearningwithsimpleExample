"use strict";

(() => {
    const express = require("express");
    const router = express.Router();
    const userlog = require('./loginRoutes');

    router.use('/user',userlog);   
  
    module.exports = router;
})();