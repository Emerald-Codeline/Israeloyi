const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/usercontroller')

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'user'
    next()
})

router.route('/')
    .get(admincontroller.index);


router.route('/investment')
    .get(admincontroller.getInvestments)
    .post(admincontroller.submitInvestments);

router.route('/investment/create')
    .get(admincontroller.creatInvestments)

router.route('/logout')
    .get(admincontroller.logout)

module.exports = router;