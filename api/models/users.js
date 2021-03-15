var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
  username: {
    type: String,
    default: '',
  },
  email: {
    type: 'String',
    default: '',
  },
  googleId: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: '',
  },
  level: {
    type: Number,
    default: 1,
  },
});
module.exports = mongoose.model('User', User);
