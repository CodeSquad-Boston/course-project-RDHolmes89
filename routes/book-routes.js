const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book-controller');

router.route('/:id')
    .get(bookCtrl.books);

module.exports = router;