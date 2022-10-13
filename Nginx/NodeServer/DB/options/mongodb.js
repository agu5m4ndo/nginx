const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose;