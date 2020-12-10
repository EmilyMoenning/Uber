const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')
const User = sequelize.define('User', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    sequelize,
    modelName: 'User'
  // Other model options go here
});
//User.sync({ force: true })
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User