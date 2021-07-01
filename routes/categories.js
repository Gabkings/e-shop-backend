const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({success: false})
    }
    res.send(categoryList);
})

router.post(`/`, async (req, res) => {
    let category = new Category({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        }
    )

    category = await category.save()
    if (!category) {
        return res.status(404).json({success: false, message: "Category cannot be created"})
    }
    res.status(201).send({data:{message:"Created successfully",category}});
})

router.delete("/:id", (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(category => {
        if (category) {
            return res.status(200).send({success: true, message: "Deleted Successful"})
        } else {
            return res.status(404).send({success: false, message: "Item not found"})
        }
    }).catch(e => {
        return res.status(500).send({
            success: false, message: "Server error",
            error: e.message
        })
    })
});

router.put("/:id", (req, res) => {
    Category.findByIdAndUpdate(req.params.id,
        {name: req.body.name, color: req.body.color, icon: req.body.icon}).then(category => {
        if (category) {
            return res.status(200).send({success: true, message: "Update Successful", category})
        } else {
            return res.status(404).send({success: false, message: "Item not found"})
        }
    }).catch(e => {
        return res.status(500).send({
            success: false, message: "Server error",
            error: e.message
        })
    })
});

router.get("/:id", (req, res) => {
    Category.findById(req.params.id).then(category => {
        if (category) {
            return res.status(200).send(category)
        } else {
            return res.status(404).send({message: "Item not found"})
        }
    }).catch(e => {
        return res.status(500).send({
            success: false, message: "Server error",
            error: e.message
        })
    })
});

module.exports = router;
