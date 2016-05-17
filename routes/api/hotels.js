var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;
var Day = models.Day;

router.get('/', function(req, res, next) {
    Promise.all([
            Hotel.findAll({ include: Place }),
        ])
        .spread(function(hotels) {
            res.json(hotels);
        })
        .catch(next);
});

module.exports = router;
