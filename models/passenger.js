const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')
const Passenger = sequelize.define('Passenger', {
  // Model attributes are defined here
  latitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hasManyTrips: {
    type: DataTypes.STRING,
  //  allowNull: false
  },
  hasTraveledWithManyDrivers: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
},
 {
    sequelize,
    modelName: 'Passenger'
  // Other model options go here
});
// Passenger.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Passenger === sequelize.models.Passenger); // true

module.exports = Passenger