const express = require("express");
const app = express();
require("./db/conn");
app.use(express.json());
const Product = require("./model/userSchema");
app.use(require("./router/Auth"));
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Sever Is Running On ${PORT}`)
})