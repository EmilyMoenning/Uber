const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')
const Trip = sequelize.define('Trip', {
  // Model attributes are defined here
  riderID: {
    type: DataTypes.STRING,
    allowNull: false
  },  
  driverID: {
    type: DataTypes.STRING,
    allowNull: false
  },  
  fromLatitude: {
    type: DataTypes.STRING,
    allowNull: false
  },  
  fromLongitude: {
    type: DataTypes.STRING,
    allowNull: false
  },  
  toLatitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toLongitude: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    sequelize,
    modelName: 'Trip'
  // Other model options go here
});
//Trip.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Trip === sequelize.models.Trip); // true

module.exports = Trip