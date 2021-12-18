const Song = require('../models/songModel')
const fs = require('fs')

module.exports = {
    index: (req, res) => {
        req.flash('success-message', 'Welcome Mr Cmoney')
        res.render('admin/index')
    },
    getSongs: (req, res) => {
        Song
            .find()
            .lean()
            .then(songs => {
                let allSongs = songs.reverse()
                req.flash('success-message', 'Welcome Mr Cmoney')
                res.render('admin/investment/index', { allSongs: allSongs })
            })
    },




    submitSong: (req, res) => {
        const newSong = new Song({
            name: req.body.songname,
            songFile: req.file.path,
            songAlbum: req.body.songalbum,
            songLength: req.body.songlength / 100,
            featuring: req.body.featuring,
            producer: req.body.producer,
            cost: req.body.expenditure
        })
        newSong
            .save()
            .then(song => {
                req.flash('success-message', 'Song created succesfully')
                res.redirect('/admin101/songs')
            })
    },
    createSong: (req, res) => {
        res.render("admin/investment/create")
    },

    deleteSong: (req, res) => {
        Song.findByIdAndDelete(req.params.id)
            .then(deletedSong => {
                fs.unlink(deletedSong.songFile, (err) => {
                    if (err) {
                        throw err
                    }
                    console.log('File Deleted');

                })
                req.flash('success-message', `The Song ${deletedSong.name} has been deleted`)
                res.redirect('/admin101/songs')
            });
    }
}