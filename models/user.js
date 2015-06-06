var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  facebookId: { 
    String
  },
  access_token: {
    String
  }
});

userSchema.set('versionKey', false);

userSchema.statics.findOrCreate = function (filters, cb) {
  User = this;
  this.find(filters, function (err, results) {
    if (results.length == 0) {
      var newUser = new User();
      newUser.facebookId = filters.facebookId;
      newUser.save(function (err, doc) {
        cb(err, doc);
      });
    } else {
      cb(err, results[0]);
    }
  });
};

module.exports = mongoose.model('User', userSchema);

