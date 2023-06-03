const User = require('../models/user.js');
const fs = require('fs');
const path = require('path');
class UserController {
    addToCart = (id, data) => {
        return new Promise(
        (resolve, reject) => {
            try {
                User.updateOne(
                    {
                        _id: id,
                    },
                    {
                        cart: JSON.stringify(data)
                    }
                ).then(
                    (success) => {
                        resolve({
                            msg: "Added to cart",
                            status: 1
                        });
                    }
                ).catch(
                    (error) => {
                        console.log(error.message);
                        reject({
                            msg: "Unable to add to cart",
                            status: 0
                        });
                    }
                )
            } catch (err) {
                reject({
                    msg: err.message,
                    status: 0
                })
            }
        }
        )
    }


}

module.exports = UserController;