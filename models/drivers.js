const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')
const Driver = sequelize.define('Driver', {
  // Model attributes are defined here
  driversLicenseNumber: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  carMakeAndModel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carLicensePlateNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
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
    //allowNull: false
  },
  hasDriverManyPassengers: {
    type: DataTypes.STRING,
    //allowNull: false
  }
}, {
    sequelize,
    modelName: 'Driver'
  // Other model options go here
});
//Driver.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Driver === sequelize.models.Driver); // true

module.exports = Driver