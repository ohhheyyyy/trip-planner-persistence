var router = require('express').Router();

var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;
var Day = models.Day;

router.use('/hotels', require('./hotels.js'));
router.use('/restaurants', require('./restaurants.js'));
router.use('/activities', require('./activities.js'));
router.use('/days', require('./days.js'));

module.exports = router;
