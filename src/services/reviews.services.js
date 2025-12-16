import reviewModel from "../models/reviews.model.js";

const dbCreateReview = async (newReview) => {
  return await reviewModel.create(newReview);
};

const dbGetReviewByProductId = async (a) => {
  return await reviewModel.find({ productId: a });
};

const dbDeleteReviewById = () => {};

export { dbCreateReview, dbGetReviewByProductId, dbDeleteReviewById };
