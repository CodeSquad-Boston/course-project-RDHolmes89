const Comic = require('../models/comic-model');
const User = require('../models/user-models');
const passport = require('passport');

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
    login_post: (req, res) => {
    const {username, password} = req.body;
    const user = new User ({
        username: username,
        password: password
    })
    req.login(user, (error) => {
      if (error) {
        console.log(`The error at login is: ${error}`);
      } else {
        passport.authenticate('local')(req, res, () => {
          res.redirect('/admin-console');
        });
      };
   });
},
register_get: (req, res) => {
    res.render('pages/register');
},
register_post: (req, res) => {
    const {username, password} = req.body;
    User.register({username: username}, password, (error, user) => {
        if(error) {
            console.log(`The error at register is: ${error}`);
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/admin-console');
            });
        }
    });
},
google_get: passport.authenticate('google', {
    scope: ['openid', 'profile', 'email']
}),
google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
        res.redirect('/admin-console');
    }
],
logout_get: (req, res) => {
    req.logout();
    res.redirect('/');
}
}