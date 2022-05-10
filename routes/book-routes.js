const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book-controller');

// router.route('/')
//     .get(bookCtrl.books);

router.route('/:id')
    .get(bookCtrl.books);

module.exports = router;