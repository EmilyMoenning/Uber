const Review = require('../models/review.js')
const create = async(review) => {
   // Create a new review
    const savedReview = await Review.create(review);
    console.log("savedReview's auto-generated ID:", savedReview.id);
    return savedReview
}
const index = async() => {
    // Create a new review
     const reviews = await Review.findAll({
      });
     return reviews
 }
module.exports = {
    create,
    index
}
  // SELECT * FROM post WHERE authorId = 2
  