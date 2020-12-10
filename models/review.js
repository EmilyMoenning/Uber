const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')
const Review = sequelize.define('Review', {
  // Model attributes are defined here
  isDriver: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  star: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rideID: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }
}, {
    sequelize,
    modelName: 'Review'
  // Other model options go here
});
//Review.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Review === sequelize.models.Review); // true

module.exports = Review