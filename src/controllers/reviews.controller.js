import reviewModel from "../models/reviews.model.js";
import {
  dbCreateReview,
  dbDeleteReviewById,
  dbGetReviewById,
} from "../services/reviews.services.js";

const createReview = async (req, res) => {
  try {
    const inputData = req.body;

    const reviewRegistered = await dbCreateReview(inputData);

    res.json({ msg: "registrado", reviewRegistered });
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
