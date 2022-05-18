// const siteData = require('../data/data');
const Comic = require('../models/comic-model');

module.exports = {
    index: (req, res) => {
        Comic.find({}, (error, everyComic) => {
            if(error) {
                return error;
            } else {
            
        res.render('pages/index', {
            comics: everyComic
        });
    }
})
    },
   about: (req, res) => {
    res.render('pages/about');
},

   login: (req, res) => {
    res.render('pages/login');
},
}