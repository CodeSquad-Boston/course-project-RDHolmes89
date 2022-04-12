const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan('combined'));

//ROUTES
app.get('/', (req, res) => {
    res.send('This is the homepage.')
});

app.get('/about', (req, res) => {
    res.send('This route points to the About page.');
});

app.get('/login', (req, res) => {
    res.send('This route points to the Login page.');
});

app.get('/admin-console', (req, res) => {
    res.send('This route points to the Admin Console page.');
});

app.get('/admin-console/create-book', (req, res) => {
    res.send('This route points to the Create page.');
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})