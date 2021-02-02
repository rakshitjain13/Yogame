var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

/*var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens*/

passport.use(
	new GoogleStrategy(
		{
			clientID:
				"389238695143-rfu8qf1qmhpu74ngf2q8tg07fcig1q6f.apps.googleusercontent.com",
			clientSecret: "1QtVv4FJvI-fn84PGIVlPCyo",
			callbackURL: "http://localhost:5000/google/callback",
			userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
		},
		function (request, accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);
