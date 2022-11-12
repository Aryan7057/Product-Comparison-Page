const express = require("express");
const router = express.Router();
const Product = require("../model/userSchema");
router.get("/get", async (req, res) => {
    try {
        const getData = await Product.find({});
        res.send(getData)
    } catch (err) {
        res.status(404).send(err);
    }
});
router.post("/post", (req, res) => {
    const { id, name, price, rating } = req.body;
    if (!name || !price || !rating) {
        return res.status(422).json({ error: "Please Filled The Field Properly" });
    }
    Product.findOne({ name: name })
        .then((nameExist) => {
            if (nameExist) {
                return res.status(422).json({ error: "Name Is Already Defined" })
            }
            const list = new Product({ id, name, price, rating });
            list.save().then(() => {
                res.status(201).json({ message: "Successfully Registered" });
            }).catch((err) => res.status(500).json({ error: "Failed To Registered" }));
        }).catch((err) => console.log(err));
});
module.exports = router;