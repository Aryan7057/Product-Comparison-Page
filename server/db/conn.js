const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/Product-Comparison-Page";
mongoose.connect(DB).then(() => {
    console.log("Connection Successful")
}).catch((err) => console.log(err));