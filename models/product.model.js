const { Schema, model } = require('mongoose')

const productSchema = Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        default: 'Nombre desconocido',
        minlength: 2,
        maxlength: 100,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    description: {
        type: String,
        minlength: 2,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: true,

    },
    discountPercentage: {
        type: Number,
        // match: /[0-9]{4}[0-9]/
    },
    rating: {
        type: Number,
        required: true,

    },
    stock: {
        type: Number,
        required: true,

    },
    brand: {
        type: Number,
    },
    category: {
        type: Number,
    },
    thumbnail: {
        type: Number,
    },
    images: {
        type: [String]

    }
})

const Product = model('product', productSchema)

module.exports = Product