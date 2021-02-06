var express = require('express');
var passport = require('passport');
const bodyParser = require('body-parser');
var router = express.Router();
var User = require('../models/users');
var authenticate = require('../authenticate');
const cors = require('./cors');
router.use(bodyParser.json());

router.post('/signin', cors.corsWithOptions, (req, res, next) => {
  var profile = req.body.profileObj;
  console.log(profile);
  User.findOne({ googleId: profile.googleId })
    .then((user) => {
      if (user !== null) {
        var token = authenticate.getToken({ _id: user._id });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ user, token, success: true });
      } else {
        user = new User({ googleId: profile.googleId });
        user.username = profile.name;
        user.email = profile.email;
        user
          .save()
          .then((user) => {
            var token = authenticate.getToken({ _id: user._id });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ user, token, success: true });
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
