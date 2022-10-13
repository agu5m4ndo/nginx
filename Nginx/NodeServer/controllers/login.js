const path = require('path');

const getHtml = async(req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
}

const sessionData = (req, res) => {
    if (req.user) {
        // console.log(req.user);
        res.status(200).json({ username: req.user.username })
    } else res.status(404).json({ message: 'Session has not been created' })
}

const loginErrorHtml = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "login-error.html"))
}

module.exports = {
    getHtml,
    sessionData,
    loginErrorHtml
}