const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderItem = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

exports.OrderItem = mongoose.model("Order", OrderItem )
