// const siteData = require('../data/data');
// const { v4:uuid } = require('uuid');
const Comic = require('../models/comic-model');


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
},
    book_create: (req, res) => {
        const { _id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        siteData.push({_id, title,author, publisher, genre, pages, rating, synopsis, image}); {
        res.redirect('/admin-console');
        } 
},
book_update: (request, response) => {

    const {_id} = request.params;

    const {title, author, publisher, genre, pages, rating, synopsis, image} = request.body;

    const foundBook = siteData.find(book => book._id === String(_id));

    foundBook.title = title;
    foundBook.author = author;
    foundBook.publisher = publisher;
    foundBook.genre = genre;
    foundBook.pages = pages;
    foundBook.rating = rating;
    foundBook.synopsis = synopsis;
    foundBook.image = image;

    response.redirect("/admin-console");
  },
    book_delete: (req, res) => {
        const { _id } = req.params;
        const foundBook = siteData.find(book => book._id === _id);
        const index = siteData.indexOf(foundBook);
        siteData.splice(index, 1);
        res.redirect('/admin-console'); 
        }
    
}