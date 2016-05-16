var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models')
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;

// OR, with ES6, you can do:
//
//   var {Hotel, Restaurant, Activity, Place} = models;
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

router.get('/', function (req, res, next) {
  Promise.all([
    Hotel.findAll({include: Place}),
    Restaurant.findAll({include: Place}),
    Activity.findAll({include: Place})
  ])
  .spread(function (hotels, restaurants, activities) {
    res.render('index', {
      hotels: hotels,
      restaurants: restaurants,
      activities: activities
    });
  })
  .catch(next);
});

module.exports = router;
