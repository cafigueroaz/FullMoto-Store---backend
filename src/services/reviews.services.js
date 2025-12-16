import reviewModel from "../models/reviews.model.js";

const dbCreateReview = async (newReview) => {
  return await reviewModel.create(newReview);
};

const dbGetReviewById = () => {};

const dbDeleteReviewById = () => {};

export { dbCreateReview, dbGetReviewById, dbDeleteReviewById };
