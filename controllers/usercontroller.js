module.exports = {
    index: (req, res) => {
        res.render('user/index')
    },
    getInvestments: (req, res) => {
        res.send("All My Investments")
    },
    submitInvestments: (req, res) => {
        res.send("Investments SUbmited")
    },
    creatInvestments: (req, res) => {
        res.send("Investments created")
    },
    logout: (req, res) => {
        res.send("User Loged-Out")
    }
}