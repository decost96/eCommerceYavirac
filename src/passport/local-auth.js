const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

passport.use("local-signup", new localStrategy({
    usernameField: 'email',
    passwordField: 'passport',
    passReqToCallback:  true
}, (res, email, password, done)=>{
    
}));
