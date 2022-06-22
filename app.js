const express = require('express')
const { join } = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

// Database
require('./db')

// Model
const Product = require('./models/product.model')

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/tienda', (req, res) => {

    Product
        .find()
        .then(products => {
            res.render('products-list', { products })
        })
        .catch(err => console.log(err))
})



app.listen(3000, () => console.log('🏃‍ on port 3000'));