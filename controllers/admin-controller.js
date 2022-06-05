const Comic = require('../models/comic-model');


module.exports = {
    admin: (req, res) => {
        if(req.isAuthenticated()) {
            Comic.find({}, (error, everyComic) => {
                if(error) {
                    return error;
                } else {

                    res.render('pages/admin', {
                        comics: everyComic
                    });
                }
            })
        } else {
            res.redirect('/login');
        }
    },
    create: (req, res) => {
        if(req.isAuthenticated()) {
            res.render('pages/create');
        } else {
            res.redirect('/login');
        }

    },
    update: (req, res) => {
        if(req.isAuthenticated()) {
            const { _id } = req.params;
            Comic.findOne({ _id: _id }, (error, foundComic) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/update', {
                        foundBook: foundComic
                    });
                }
            });
        } else {
            res.redirect('/login');
        }

    }
}