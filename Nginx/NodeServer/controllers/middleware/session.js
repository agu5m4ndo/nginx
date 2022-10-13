const session = require('express-session');
const MongoStore = require('connect-mongo');

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

module.exports = session({
    store: MongoStore.create({
        mongoUrl: 'mongodb://usuarioCoderhouse:coderhouse@nodeexpressproject.r8xsu.mongodb.net/session-products-api?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    rolling: true, //Renueva la session si se ejecutan requests
    cookie: { maxAge: 10 * 60 * 1000 } //La session se eliminará luego de 10 minutos de inactividad
})