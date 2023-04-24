const express = require('express');
const CategoryController = require('../controllers/category.js');
const fileUpload = require('express-fileupload');
const { getRandomImageName, getImageDest } = require('../helper.js');
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
    fileUpload(
        { createParentPath: true }
    ),
    (req, res) => {
        const image = req.files.image;
        const imgNameArr = image.name.split(".");
        const ext = imgNameArr[imgNameArr.length - 1];
        const allowedExt = ['png', 'jpeg', 'jpg', 'gif'];
        if (allowedExt.includes(ext.toLowerCase())) {
            const imageName = getRandomImageName(image.name);
            const destination = getImageDest('category') + imageName;
            try {
                image.mv(destination);
                const response = new CategoryController().save(
                    { image: imageName, ...req.body }
                );
                response.then(
                    (success) => {
                        res.send(success)
                    }
                ).catch(
                    (error) => {
                        res.send(error)
                    }
                )
            } catch (err) {
                res.send({
                    msg: "Unable to add data",
                    status: 0
                })
            }
        } else {
            res.send({
                msg: "This file is not allowed, only image file are allowed",
                status: 0
            })
        }


    }
)

Router.delete(
    "/:id/:imgName",
    (req, res) => {
        new CategoryController().deleteData(req.params.id, req.params.imgName)
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