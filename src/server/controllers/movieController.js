const Movie = require('../models/movie');
const express = require('express');
const router = express.Router();

router.route('/movies')
  .get((req, res) => {
    Movie.find((error, movies) => {
      if (error) {
        res.send(error);
      }
      return res.json(movies);
    });
  })
  .post((req, res) => {
    const movie = new Movie(req.body);
    movie.save((error) => {
      if (error) {
        return res.send(error);
      }
      return res.send({ message: 'Movie Added' });
    });
  });

router.route('/movies/:id')
  .put((req, res) => {
    Movie.findOne({ _id: req.params.id }, (error, movie) => {
      if (error) {
        return res.send(error);
      }

      for (prop in req.body) {
        movie[prop] = req.body[prop];
      }

      movie.save((error) => {
        if (error) {
          return res.send(error);
        }

        return res.json({ message: 'Movie updated' });
      });

      return true;
    });
  })
  .get((req, res) => {
    Movie.findOne({ _id: req.param.id }, (error, movie) => {
      if (error) {
        return res.send(error);
      }

      return res.json(movie);
    });
  })
  .delete((req, res) => {
    Movie.remove({ _id: req.params.id }, (error) => {
      if (error) {
        return res.send(error);
      }

      return res.json({ message: 'Movie has been deleted' });
    });
  });

module.exports = router;
