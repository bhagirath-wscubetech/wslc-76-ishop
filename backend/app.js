// const dotenv = require('dotenv');
const express = require('express');
const CategoryRouter = require('./routes/category.js');
const ProductRouter = require('./routes/product.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);


// ------------
mongoose.connect(
    'mongodb+srv://bhagirath:XbPcys1BefQkdgMj@cluster0.oiuxnke.mongodb.net/?retryWrites=true&w=majority'
).then(
    () => {
        app.listen(
            5000,
            () => {
                console.log('Server started');
            }
        )
    }
).catch(
    () => {
        console.log('Connection error');
    }
)
