var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
  googleId: {
    type: String,
    default: '',
  },
});
module.exports = mongoose.model('User', User);
