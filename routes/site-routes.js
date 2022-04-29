const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

router.route('/')
    .get(siteCtrl.index);

router.route('/about')
    .get(siteCtrl.about);

app.get('/login')
    .get(siteCtrl.login);

module.exports = router;