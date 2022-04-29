const siteData = require('../data/data');

module.exports = {
    index: app.get('/', (req, res) => {
        res.render('pages/index');
    }),
   about: app.get('/about', (req, res) => {
    res.render('pages/about');
}),

   login: app.get('/login', (req, res) => {
    res.render('pages/login');
}),
}