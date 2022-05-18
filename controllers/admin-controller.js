// const siteData = require('../data/data');
const Comic = require('../models/comic-model');


module.exports = {
    admin: (req, res) => {
        Comic.find({}, (error, everyComic) => {
            if (error) {
                return error;
            } else {

                res.render('pages/admin', {
                    comics: everyComic
                });
            }
        });
    },
    create: (req, res) => {
        res.render('pages/create');
    },
    update: (req, res) => {
        const { _id } = req.params;
        Comic.findOne({ _id: _id }, (error, foundComic) => {
            if (error) {
                return error;
            } else {
                res.render('pages/update', {
                    foundBook: foundComic
                });
            }
        })
    }
}