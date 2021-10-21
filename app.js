const express = require('express');
const bodyParser = require('body-parser')
const loginController = require('./controllers/LoginController');
const productController = require('./controllers/ProductController');
const app = express();
const port = 3000;
global.FAKE_DB = require('./fakedb')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get('/product/list', (req, res) => {
    if (productController.list) {
        productController.list(req, res);
    }else{
        res.send("Not implemented")
    }
});

app.get('/product/create', (req, res) => {
    if (productController.createForm) {
        productController.createForm(req, res);
    }else{
        res.send("Not implemented")
    }
});

app.post('/product/create', (req, res) => {
    if (productController.create) {
        productController.create(req, res);
    }else{
        res.send("Not implemented")
    }
});

app.get('/product/:id/edit', (req, res) => {
    if (productController.editForm) {
        productController.editForm(req, res);
    }else{
        res.send("Not implemented")
    }
});

app.post('/product/:id/edit', (req, res) => {
    if (productController.edit) {
        productController.edit(req, res);
    }else{
        res.send("Not implemented")
    }
});


app.get('/product/:id/remove', (req, res) => {
    if (productController.remove) {
        productController.remove(req, res);
    }else{
        res.send("Not implemented")
    }
});

console.log("Registered routes : ");
for (let s of app._router.stack){
    if (s.route){
        console.log(Object.keys(s.route.methods).join(",") + " " +s.route.path);
    }
}

app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
});
