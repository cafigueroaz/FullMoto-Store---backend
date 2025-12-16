import reviewModel from "../models/reviews.model.js";

const createReview = (req, res) => {
  try {
    console.log("create review");
    res.json({ msg: "create review" });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error, no se puede crear review" });
  }
};

const getReviewById = (req, res) => {
  try {
    console.log("get review");
    res.json({ msg: "get review" });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error, no se puede obtener review" });
  }
};

const deleteReviewById = (req, res) => {
  try {
    console.log("delete review");
    res.json({ msg: "delete review" });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error, no se puede eliminar review" });
  }
};

export { createReview, getReviewById, deleteReviewById };
