var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var User = require('../models/users');
const cors = require('./cors');
router.use(bodyParser.json());

router.post('/', cors.corsWithOptions, (req, res, next) => {
  var id = req.body.id;
  var level = req.body.level;

  User.findByIdAndUpdate(id, { level: level }, function (err, result) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
