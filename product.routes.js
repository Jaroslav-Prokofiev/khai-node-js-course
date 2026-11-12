const express = require('express');
const products = require('./products');

const router = express.Router();

// handle get request for path /products
router.get('/products', (request, response) => {
    return response.json(products);
});

// handle get request for path /products/:brand
router.get('/products/:brand', (req, res) => {
    const { brand } = req.params;
    const filteredProducts = products.filter(product => product.brand === brand);
    res.json(filteredProducts);
});

// handle get request for path /products/id/:id
router.get('/products/id/:id', (req, res) => {
    const { id } = req.params;

    const product = products.find(product => product.id === Number(id));

    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

router.get('/productswitherror', (request, response) => {
    let err = new Error("processing error ");
    err.statusCode = 400;
    throw err;
});

module.exports = router;