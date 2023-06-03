const express = require('express');
const ColorController = require('../controllers/color.js');
const Router = express.Router();
Router.get(
    "/:id?",
    (req, res) => {
        const response = new ColorController().getData(req.params.id);
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

        try {
            console.log(req.body);
            const response = new ColorController().save(
                req.body
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
    }
)

Router.delete(
    "/:id/:imgName",
    (req, res) => {
        new ColorController().deleteData(req.params.id, req.params.imgName)
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

Router.post(
    '/update/:id',
    (req, res) => {
        let imageName = req.body.old_image_name; // this is the old name
        const image = req.files?.image;
        if (image !== undefined) {
            imageName = getRandomImageName(image.name);
            const destination = getImageDest('category') + imageName;
            try {
                image.mv(destination);
                const imagePath = path.join(__dirname, "../", "public/uploads/category", req.body.old_image_name);
                fs.unlinkSync(imagePath); //delete
            } catch (err) {
                console.log(err.message);
                return res.send({ msg: "Internal server error", status: 0 });
            }
        }
        const newData = {
            name: req.body.name,
            slug: req.body.slug,
            image: imageName
        };
        new ColorController().updateData(req.params.id, newData)
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