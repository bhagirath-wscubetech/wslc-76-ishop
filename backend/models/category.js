const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: "String",
            max: 100
        },
        slug: {
            type: "String",
            max: 120
        }
    }
)
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;