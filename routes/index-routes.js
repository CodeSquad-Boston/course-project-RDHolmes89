const express = require('express');
const adminRoutes = require('./admin-routes');
const bookRoutes = require('./book-routes');
const siteRoutes = require('./site-routes');
const router = express.Router();

//routes
router.route('/') 
.get(siteRoutes.index);
router.route('/books')
.get(bookRoutes.books);
router.route('/admin-console')
.get(adminRoutes.admin);

//dont forget to export router
module.exports = router;