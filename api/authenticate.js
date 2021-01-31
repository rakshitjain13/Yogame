var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

/*var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens*/

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '121327610127-klunl6r5qs78nl6ptfl3dgtc0okl0qq6.apps.googleusercontent.com',
      clientSecret: 'ACtstX0YRQxYLz4dhswL2Ycg',
      callbackURL: 'http://localhost:5000/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    function (request, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
