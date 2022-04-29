const siteData = require('../data/data');


module.exports = {
    admin: app.get('/admin-console', (req, res) => {
        res.render('pages/admin');
    }),
   create: app.get('/admin-console/create-book', (req, res) => {
    res.render('pages/create');
}),
   update: app.get('/admin-console/update-book/:id', (req, res) => {
    res.render('pages/update');
})
}