var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var User = require('../models/users');
const cors = require('./cors');
var authenticate = require('../authenticate');
router.use(bodyParser.json());

router.post(
  '/',
  cors.corsWithOptions,
  authenticate.verifyUser,
  (req, res, next) => {
    User.findById(req.body.user.user_id)
      .then((user) => {
        user.level = user.level + 1;
        user.save().then((obj) => {
          console.log(obj);
          res.send(obj);
        });
      })
      .catch((err) => next(err));
  }
);

module.exports = router;
