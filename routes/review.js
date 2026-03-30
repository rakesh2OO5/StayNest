const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isLoggedin,isReviewAuthor}=require("../middleware.js");
const reviewController = require("../controllers/review.js");

//Post route
router.post(
  "/",
  isLoggedin,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//Delete route
router.delete(
  "/:reviewId",
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;