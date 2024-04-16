const express = require('express');
const router = express.Router()
const ProductController = require('../controllers/product')

router.get('/products/create', (req, res) => {
    res.render('createProduct')
})

router.post('/products/create', ProductController.create)
router.get('/products', ProductController.showAll)
router.get('/products/edit/:id', ProductController.showEdit)
router.post('/products/edit/:id', ProductController.update)
router.get('/products/delete/:id', ProductController.delete)

module.exports =router