const User = require('../models/user.js')
const create = async(user) => {
   // Create a new user
    const savedUser = await User.create(user);
    console.log("savedUser's auto-generated ID:", savedUser.id);
    return savedUser
}
const index = async() => {
    // Create a new user
     const users = await User.findAll({
      });
     return users
 }
module.exports = {
    create,
    index
}
  // SELECT * FROM post WHERE authorId = 2
  