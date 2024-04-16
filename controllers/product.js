const fs = require('fs')

class ProductController {

    static create(req, res) {
        const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
        const newProduct = {
            id: products[products.length-1].id + 1,
            tag: req.body.tag,
            brand: req.body.brand,
            image_url: req.body.image_url,
            price: Number(req.body.price),
            stock: Number(req.body.stock)
        }

        const finalProducts = [...products, newProduct]

        fs.writeFileSync('./products.json', JSON.stringify(finalProducts, 0, 2))
        res.render('home', {products: finalProducts})
    }

    static showAll(req, res) {
        const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
        res.render('home', {products})
    }

    static showEdit(req, res) {
        const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
        const [product] = products.filter(product => product.id === Number(req.params.id))
        res.render('updateProduct', {product})
    }

    static update(req, res) {
        const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
        const oldProducts = products.filter(product => product.id !== Number(req.params.id))
        const updatedProduct = {
            id: Number(req.params.id),
            tag: req.body.tag,
            brand: req.body.brand,
            image_url: req.body.image_url,
            price: Number(req.body.price),
            stock: Number(req.body.stock)
        }
        const finalProducts = [...oldProducts, updatedProduct]
        fs.writeFileSync('./products.json', JSON.stringify(finalProducts, 0, 2))
        res.render('home', { products: finalProducts})
    }

    static delete(req, res) {
        const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
        const finalProducts = products.filter(product => product.id !== Number(req.params.id))

        fs.writeFileSync('./products.json', JSON.stringify(finalProducts, 0, 2))
        res.render('home', { products: finalProducts})
    }
}

module.exports = ProductController