const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');
const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
console.log(products)

app.use(express.urlencoded({extended: false})) //untuk parsing atau membuat aplikasi bisa membaca inputan dari user
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hai!')
})

app.post('/register', (req, res) => {
    res.send({
        email: req.body.email,
        password: req.body.password
    })
})

app.get('/products', (req, res) => {
    let result
    if (req.query.tag){
        result = products.filter((product) => product.tag === req.query.tag)
    } else if (req.query.brand){
        result = products.filter((product) => product.brand === req.query.brand)
    } else{
        result = products
    }

    res.send(result)
})

app.get('/products/:id', (req, res) => {
    const result = products.filter((product) => product.id === req.params.id)
    res.send(result)
})

app.listen(port, (req,res) => {
    console.log(`app running on port ${port}`)
})

