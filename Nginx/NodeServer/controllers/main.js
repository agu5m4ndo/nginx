const path = require('path')

const mainHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
}

module.exports = { mainHtml };