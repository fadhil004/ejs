const express = require('express')
const fs = require('fs');
const session = require('express-session');
const router = require('./routers')

const app = express()
const port = 3000

const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))
console.log(users)
const secret ={secret: 'secret', resave: false, saveUninitialized: true, cookies: {}}

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false})) //untuk parsing atau membuat aplikasi bisa membaca inputan dari user
app.use(express.json())
app.use(session(secret))
app.use('/', router)

// const isLogin = (req, res, next) => {
//     if(req.session.user && req.session.user.email){
//         next()
//     } else {
//         res.redirect('/login')
//     }
// }

// app.get('/login', (req, res) => {
//     res.render('login', {})
// })

// app.post('/login', (req, res) => {
//     const [loggedUser] = users.filter((user) => user.email === req.body.email)
//     if (loggedUser && loggedUser.password === req.body.password){
//         req.session.user = { email: loggedUser.email } //karena masih data dummy dan blom ada id
//         res.redirect('/')
//     } else {
//         res.redirect('/login')
//     }
// })

// app.get('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/login')
//     })
// })

// app.get('/', (req,res) => {
//     res.render('home.ejs', {
//         products: products
//     })
// })

// app.post('/register', (req, res) => {
//     res.send({
//         email: req.body.email,
//         password: req.body.password
//     })
// })

// app.get('/products', isLogin, (req, res) => {
//     let result
//     if (req.query.tag){
//         result = products.filter((product) => product.tag === req.query.tag)
//     } else if (req.query.brand){
//         result = products.filter((product) => product.brand === req.query.brand)
//     } else{
//         result = products
//     }

//     res.render('home', { products: result})
// })

// app.get('/products/:id', (req, res) => {
//     const result = products.filter((product) => product.id === req.params.id)
//     res.send(result)
// })

app.listen(port, (req,res) => {
    console.log(`app running on port ${port}`)
})

