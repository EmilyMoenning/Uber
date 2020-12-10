const Driver= require('../models/drivers.js')
const create = async(driver) => {
   // Create a new driver
    const savedDriver = await Driver.create(driver);
    console.log("savedDriver's auto-generated ID:", savedDriver.id);
    return savedDriver
}
const index = async() => {
    // Create a new driver
     const drivers = await Driver.findAll({
      });
     return drivers
 }
module.exports = {
    create,
    index
}
  // SELECT * FROM post WHERE authorId = 2
  