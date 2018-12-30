var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var photos = require('../models/photos');

/* GET home page. */

function listImages(req, res, next) {
  // Use the mongoose to find all the images in the model
  Photos.find({}, // Find all images
    function (err, photos) {

      // Check for error
      if (err) {
        return next(err);
      }

      // Render the images gallery
      res.render('photos', {
        title: 'Photos',
        photos: photos
      });
    });
}

module.exports = router;