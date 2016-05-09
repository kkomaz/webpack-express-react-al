const jwt = require('jwt-simple');
const config = require('../../../config');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

router.route('/signup')
  .post((req, res, next) => {
    // See if a user with the given email exists
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(422).send({ error: 'You must provide email and password' });
    }

    // If a user with email does not exist, return an error
    User.findOne({ email }, function(err, existingUser) {
      if (err) {
        return next(err);
      }

      if (existingUser) {
        return res.status(422).send({ error: 'Email is in use' });
      }

      // If a user does not exist ==> create
      const user = new User({
        email,
        password,
      });

      user.save(function(err) {
        if (err) { return next(err); }

        res.json({ token: tokenForUser(user) });
      });
      //  respond to request with the indicator user was created
    });
  });

module.exports = router;
