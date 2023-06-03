const express = require('express');
const UserController = require('../controllers/user.js');
const path = require('path');
const fs = require('fs');
const Router = express.Router();
Router.post(
    "/add-cart/:userId",
    (req, res) => {
        // console.log("req body", req.body);
        const response = new UserController().addToCart(req.params.userId, req.body.cart);
        response.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)
module.exports = Router;