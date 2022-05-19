// const siteData = require('../data/data');
// const { v4:uuid } = require('uuid');
// dont think ill need above requirements anymore
const Comic = require('../models/comic-model');


// module.exports = {
//     books: app.get('/books/:id', (req, res) => {
//         res.render('pages/books');
//     })
   
// }
module.exports = {
    books: (req, res) => {
        const { _id } = req.params;
        Comic.findOne({_id: _id}, (error, foundComic) => {
            if(error) {     
            } else {
                res.render('pages/books', {
                    foundBook: foundComic
        });
    }
        }); 
},
    book_create: (req, res) => {
        const {title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        const newComic = new Comic ({
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            pages: pages,
            rating: rating,
            synopsis: synopsis,
            image: image
        });
        newComic.save();
        res.redirect('/admin-console');
    
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