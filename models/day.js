var Sequelize = require('sequelize');

module.exports = function(db){
  var Day = db.define('day', {
    number: Sequelize.INTEGER
  });

  return Day; 
};
