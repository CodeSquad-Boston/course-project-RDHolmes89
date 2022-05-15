const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book-controller');
//This in its true url form localhost3000/books/
router.route('/')
    .post(bookCtrl.book_create);
//localhost3000/books/oejfkldgheifjdakfnk
router.route('/:_id')
    .get(bookCtrl.books)
    .put(bookCtrl.book_update)
    .delete(bookCtrl.book_delete)

module.exports = router;