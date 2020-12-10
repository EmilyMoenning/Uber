const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')
const Message = sequelize.define('Message', {
  // Model attributes are defined here
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  rideID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },  
  isDriver: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
}, {
    sequelize,
    modelName: 'Message'
  // Other model options go here
});
//Message.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Message === sequelize.models.Message); // true

module.exports = Message