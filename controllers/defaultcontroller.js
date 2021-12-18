const Song = require('../models/songModel')


module.exports = {
    index: (req, res) => {
        Song
            .find()
            .lean()
            .then(songs => {
                let allSongs = songs.reverse()
                req.flash('success-message', 'Welcome Mr Cmoney')
                res.render('default/index', { allSongs: allSongs })
            })
    },
    login: (req, res) => {
        res.send('yes you have logged in');

    },
    loginPost: (req, res) => {
        res.send('LoggedInn')
    },
    registerPost: (req, res) => {
        res.send('registered well')
    },
    about: (req, res) => {
        res.render('default/about')
    },
    contact: (req, res) => {
        res.render('default/contact')
    },
    play: (req, res) => {
        const id = req.params.id;
        songs.findById(id)
            .then(
                song => {
                    song.played += 1;
                    song.save()
                    res.status(200).json({ song:song })
                }
            )
    },
    download: (req, res) => {
        const id = req.params.id;
        songs.findById(id)
            .then(
                song => {
                    song.downloads += 1;
                    song.save()
                    res.status(200).json({ song:song })
                }
            )
    }
}