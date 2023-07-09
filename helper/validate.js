"use strict";

(() => {
    module.exports = (obj) => {

        const isEmail = (email) => {
            // let valid = /@gmail.com/;
            let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // simple regex expression
            if (email !== '' && email.match(emailFormat)) { return true; }
            else return false;
        }
       const emailokey= isEmail(obj.email);


        if (emailokey == true)
        return true;
    else return false;

    }
})();