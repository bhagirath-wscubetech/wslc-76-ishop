// const dotenv = require('dotenv');
const express = require('express');
const CategoryRouter = require('./routes/category.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/category", CategoryRouter);

// dotenv.config();

// console.log(process.env.SERVER_PORT);
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
