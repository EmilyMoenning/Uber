const Message = require('../models/message.js')
const create = async(message) => {
   // Create a new message
    const savedMessage = await Message.create(message);
    console.log("savedMessage's auto-generated ID:", savedMessage.id);
    return savedMessage
}
const index = async() => {
    // Create a new message
     const message = await Message.findAll({
      });
     return message
 }
module.exports = {
    create,
    index
}
  // SELECT * FROM post WHERE authorId = 2
  