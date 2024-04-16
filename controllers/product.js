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
}

module.exports = ProductController