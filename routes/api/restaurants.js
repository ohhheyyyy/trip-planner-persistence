var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;


router.get('/', function (req, res, next) {
  Promise.all([
    Restaurant.findAll({include: Place}),
  ])
  .spread(function (restaurants) {
    res.json(restaurants);
  })
  .catch(next);
});



module.exports=router;