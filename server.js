// Importing express
const express = require('express');
const app = express();
const path = require('path');

// Statics Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Setting the views 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setting the adress
app.get('/', async (req,res) => {
    res.render('index')
})
app.get('/henrique', async (req,res) => {
    res.render('pages/sobre')
})
app.get('/servicos', async (req,res) => {
    res.render('pages/servicos')
})
app.get('/contato', async (req,res) => {
    res.render('pages/contato')
})

// Setting the port of the localhost
app.listen(8080);