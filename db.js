const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres'
  });
// Option 2: Passing parameters separately (other dialects)
async function startDatabase(){
    
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
 startDatabase()
module.exports = sequelize