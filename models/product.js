const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {type: String, required: true},
    richDescription: {type: String, required: false, default: ''},
    image: {type: String, required: true},
    images: [{type: String, default: ''}],
    price: {type: Number, required: true},
    brand: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
    rating: {type: Number, default: 0, min: 0, max: 5},
    isFeatured: {type: Boolean, default: false},
    dateCreated: {type: Date, default: Date.now},
    countInStock: {
        type: Number,
        required: true,
        max: 255,
        min: 0
    },
    numReviews: {
        type: Number,
        default: 0,
    },
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

exports.Product = mongoose.model('Product', productSchema);

