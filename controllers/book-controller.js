const siteData = require('../data/data');



module.exports = {
    books: app.get('/books/:id', (req, res) => {
        res.render('pages/books');
    })
   
}