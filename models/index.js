var db = require('./_db');

var Hotel = require('./hotel')(db);
var Restaurant = require('./restaurant')(db);
var Activity = require('./activity')(db);
var Place = require('./place')(db);
var Day = require('./day')(db);

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
Day.belongsToMany(Activity, {through: 'day_activity'});


module.exports = {
  db: db, 
  Place: Place, 
  Hotel: Hotel, 
  Activity: Activity, 
  Restaurant: Restaurant,
  Day: Day
};
