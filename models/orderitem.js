const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderItem = new Schema({})

exports.OrderItem = mongoose.model("Order", OrderItem )
