const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/admincontroller');
const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdir('./uploads/', (err) => {
            cb(null, './uploads/');
        });
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ ' Israel Oyi '+ file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/mp4' || file.mimetype === 'audio/x-m4a' || file.mimetype === 'audio/x-m3a' || file.mimetype === 'audio/m4a' || file.mimetype === 'audio/m3a') {
        cb(null, true)
    } else {
        cb(req.flash('success-message', 'file not sopported'), false)
    }

}

//Multer Configurations
const upload = multer({
    storage: storage
})




router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin'
    next()
})

router.route('/')
    .get(admincontroller.index);


router.route('/songs', upload.single('songfile'))
    .get(admincontroller.getSongs)
    .post(admincontroller.submitSong);


//CREATE SONG
router.get('/songs/create', admincontroller.createSong)
router.post('/songs/create', upload.single('songfile'), admincontroller.submitSong)

//DELETE SONG
router.delete('/songs/delete/:id', admincontroller.deleteSong);

module.exports = router;