const Trip = require('../models/trip.js')
const create = async(trip) => {
   // Create a new trip
    const savedTrip = await Trip.create(trip);
    console.log("savedTrip's auto-generated ID:", savedTrip.id);
    return savedTrip
}
const index = async() => {
    // Create a new trip
     const trips = await Trip.findAll({
      });
     return trips
 }
module.exports = {
    create,
    index
}
  // SELECT * FROM post WHERE authorId = 2
  