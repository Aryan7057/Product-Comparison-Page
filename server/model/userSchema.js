const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})
const Product = mongoose.model("PRODUCTS", userSchema);
module.exports = Product;