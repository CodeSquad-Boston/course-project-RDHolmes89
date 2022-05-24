require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routes/index-routes');



app.set('view engine', 'ejs');

require('./config/connection');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(routes);

//ROUTES
// app.get('/', (req, res) => {
//     res.render('pages/index');
// });

// app.get('/about', (req, res) => {
//     res.render('pages/about');
// });

// app.get('/login', (req, res) => {
//     res.render('pages/login');
// });

// app.get('/admin-console', (req, res) => {
//     res.render('pages/admin');
// });

// app.get('/admin-console/create-book', (req, res) => {
//     res.render('pages/create');
// });

// app.get('/books/:id', (req, res) => {
//     res.render('pages/books');
// });

// app.get('/admin-console/update-book/:id', (req, res) => {
//     res.render('pages/update');
// });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})