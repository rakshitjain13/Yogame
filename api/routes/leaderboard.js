var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var User = require('../models/users');
const cors = require('./cors');
router.use(bodyParser.json());

router.get('/', cors.corsWithOptions, (req, res, next) => {
  var arr = [];
  User.find()
    .then((user) => {
      arr.push(user);
    })
    .then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.send(arr);
    })
    .catch((err) => next(err));
});

module.exports = router;
