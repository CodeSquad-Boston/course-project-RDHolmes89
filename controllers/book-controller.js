const siteData = require('../data/data');



// module.exports = {
//     books: app.get('/books/:id', (req, res) => {
//         res.render('pages/books');
//     })
   
// }
module.exports = {
    books: (req, res) => {
        const { _id } = req.params;
        const foundBook = siteData.find(book => book._id === _id);
        res.render('pages/books', {
            foundBook: foundBook
        }); 
}}