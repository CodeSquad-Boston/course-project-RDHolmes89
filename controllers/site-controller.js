const siteData = require('../data/data');

module.exports = {
    index: (req, res) => {
        res.render('pages/index');
    },
   about: (req, res) => {
    res.render('pages/about');
},

   login: (req, res) => {
    res.render('pages/login');
},
}