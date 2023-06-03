const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: "String",
            max: 100
        },
        email: {
            type: "String"
        },
        cart: {
            type: "String"
        }
    }
)
const User = mongoose.model("User", UserSchema);
module.exports = User;