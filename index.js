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

app.listen(port, (req,res) => {
    console.log(`app running on port ${port}`)
})