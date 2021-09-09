const express = require('express');
const bodyParser = require('body-parser')
const loginController = require('./controllers/LoginController');
const productController = require('./controllers/ProductController');
const app = express();
const port = 3000;

global.FAKE_DB = require('./fakedb')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
   res.redirect("login");
});

// FORMULAIRE DE LOGIN
app.get('/login', (req, res) => {
    loginController.loginForm(req, res);
});

// LOGIN
app.post('/login', (req, res) => {
    loginController.login(req, res);
});

// FORMULAIRE DE LOGIN
app.get('/register', (req, res) => {
    loginController.registerForm(req, res);
});

// LOGIN
app.post('/register', (req, res) => {
    loginController.register(req, res);
});

app.get('/product', (req, res) => {
    productController.list(req, res);
});

app.get('/product/create', (req, res) => {
    productController.createForm(req, res);
});

app.post('/product/create', (req, res) => {
    productController.create(req, res);
});

app.get('/product/:id/edit', (req, res) => {
    productController.editForm(req, res);
});

app.post('/product/:id/edit', (req, res) => {
    productController.edit(req, res);
});

app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
});
