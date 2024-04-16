const express = require('express');
const router = express.Router()
const ProductController = require('../controllers/product')

router.get('/products/create', (req, res) => {
    res.render('createProduct')
})

router.post('/products/create', ProductController.create)
router.get('/products', ProductController.showAll)

module.exports =router