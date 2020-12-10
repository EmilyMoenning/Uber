const Passenger = require('../models/passenger.js')
const create = async(passenger) => {
   // Create a new passenger
    const savedPassenger = await Passenger.create(passenger);
    console.log("savedPassenger's auto-generated ID:", savedPassenger.id);
    return savedPassenger
}
const index = async() => {
    // Create a new passenger
     const passengers = await Passenger.findAll({
      });
     return passengers
 }
module.exports = {
    create,
    index
}
  // SELECT * FROM post WHERE authorId = 2
  