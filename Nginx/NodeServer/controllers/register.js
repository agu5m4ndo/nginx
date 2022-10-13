const path = require('path')
const { userExists, saveUser } = require('./middleware/validation.js');

const getHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'))
}

const registerUser = async(req, res) => {
    const { username, password } = req.body;
    if (await userExists(username)) {
        console.log(`User ${username} already exists`)
        res.sendFile(path.join(__dirname, '..', 'public', 'register-error.html'))
    } else {

        req.session.username = req.body.username
        await saveUser(username, password)
            //Una vez que el usuario ha sido registrado, podemos pensar que va a tener una sesión asociada
        res.redirect('http://localhost:8080/')
    }
}

const registerErrorHtml = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "register-error.html"))
}

module.exports = { getHtml, registerUser, registerErrorHtml };