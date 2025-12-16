import reviewModel from "../models/reviews.model.js";

const dbCreateReview = async (newReview) => {
  return await reviewModel.create(newReview);
};

const dbGetReviewByProductId = async (idProduct) => {
  return await reviewModel.find({ productId: idProduct });
};

const dbDeleteReviewById = async (_id) => {
  return await reviewModel.findOneAndDelete({ _id });
};

export { dbCreateReview, dbGetReviewByProductId, dbDeleteReviewById };
