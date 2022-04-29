const express = require('express');
const adminRoutes = require('./admin-routes');
const bookRoutes = require('./book-routes');
const siteRoutes = require('./site-routes');
const router = express.Router();

//routes
router.use('/', siteRoutes);
router.use('/books', bookRoutes);
router.use('/admin-console', adminRoutes);

//dont forget to export router
module.exports = router;