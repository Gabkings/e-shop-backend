const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
    name: String
})

exports.Order = mongoose.model('Order', orderSchema);

