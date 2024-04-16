const fs = require('fs')
const Product = require('../models').Product

class ProductController {

    static create(req, res) {
        const newProduct = {
            tag: req.body.tag,
            brand: req.body.brand,
            image_url: req.body.image_url,
            price: Number(req.body.price),
            stock: Number(req.body.stock)
        }

        Product.create(newProduct)
            .then(product => {
                res.redirect('/products')
            })
            .catch(err => {
                res.render('error', {error: err.message})
            })
    }

    static showAll(req, res) {
        Product.findAll()
        .then(products => {
            res.render('home', {products})
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }

    static showEdit(req, res) {
        Product.findByPk(req.params.id)
        .then(product => {
            res.render('updateProduct', {product})
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }

    static update(req, res) {
        const updatedProduct = {
            tag: req.body.tag,
            brand: req.body.brand,
            image_url: req.body.image_url,
            price: Number(req.body.price),
            stock: Number(req.body.stock)
        }
        Product.update(updatedProduct, {
            where: {
                id: req.params.id
            }
        })
        .then(product => {
            res.redirect('/products')
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }

    static delete(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(product => {
            res.redirect('/products')
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }
}

module.exports = ProductController