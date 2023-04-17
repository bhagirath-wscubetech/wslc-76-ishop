const express = require('express');
const CategoryController = require('../controllers/category.js');
const Router = express.Router();
Router.get(
    "/:id?",
    (req, res) => {
        const response = new CategoryController().getData(req.params.id);
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
Router.post(
    "/",
    (req, res) => {
        const response = new CategoryController().save(req.body);
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

Router.delete(
    "/:id",
    (req, res) => {
        new CategoryController().deleteData(req.params.id)
            .then(
                (success) => {
                    res.send(success);
                }
            ).catch(
                (error) => {
                    res.send(error);
                }
            )
    }
)

module.exports = Router;