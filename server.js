const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'user'
    });
});


app.get('/about', (req, res) => {

    res.render('about');
});

app.get('/home', (req, res) => {

    res.render('home');

});

app.get('/login', (req, res) => {

    res.render('login');

});


app.get('/adminpanel', (req, res) => {

    res.render('adminpanel');

});


app.get('/users', (req, res) => {

    res.render('users');

});


app.get('/carrers', (req, res) => {

    res.render('carrers');

});

app.get('/period', (req, res) => {

    res.render('period');

});

app.get('/dashboard', (req, res) => {

    res.render('dashboard');

});

app.get('/subject', (req, res) => {

    res.render('subject');

});

app.get('/subjectlider', (req, res) => {

    res.render('subjectlider');

});








app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});