const siteData = require('../data/data');


module.exports = {
    admin: (req, res) => {
        res.render('pages/admin');
    },
   create: (req, res) => {
    res.render('pages/create');
},
update: (req, res) => {
    const { _id } = req.params;
    const foundBook = siteData.find(book => book._id === _id);
    res.render('pages/update', {
        foundBook: foundBook
    }); 
}}