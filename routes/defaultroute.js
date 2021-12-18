const express = require('express');
const router = express.Router();
const defaultcontroller = require('../controllers/defaultcontroller')
const Song = require('../models/songModel')

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'default'
    next()
})
router.route('/')
    .get(defaultcontroller.index);

router.route('/login')
    .get(defaultcontroller.login)
    .post(defaultcontroller.loginPost)
router.route('/register')
    .post(defaultcontroller.registerPost)

router.route('/play/:id')
    .post(defaultcontroller.play)
router.route('/download/:id')
    .post(defaultcontroller.download)

router.get('/about', defaultcontroller.about);
router.get('/contact', defaultcontroller.contact);
module.exports = router