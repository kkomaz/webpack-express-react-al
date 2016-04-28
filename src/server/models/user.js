const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

/**
 * Define our Model
 */
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

/**
 * ON save Hook, encrypt password
 */
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // get access to the user model (An Instance of the user mode)
  const user = this;

  // Generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash(encrypt) our password using the salt
    // hash is the encrypted password
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite the textpassword with encrypted password
      user.password = hash;

      // Then Save
      next();
    });
  });
});

const userModelClass = mongoose.model('user', userSchema);

module.exports = userModelClass;
