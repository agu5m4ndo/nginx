const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

//La idea sería exportar el passport para usarlo dentro del app.use() 
//y luego exportar la local strategy para ponerlo después con passport.use(localStrategy)

const localStrategy = new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) console.log(err);
        if (!user) {
            console.log(`Username ${username} not found`);
            return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) console.log(err);
            if (!isMatch) {
                console.log('Password is not correct')
                return done(null, false);
            }
            return done(null, user);
        });
    })
})

passport.serializeUser((user, done) => {
    done(null, user._id);
})
passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id);
    return done(null, user);
})

const authenticate = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login/error' })

module.exports = {
    passport,
    localStrategy,
    authenticate,

}