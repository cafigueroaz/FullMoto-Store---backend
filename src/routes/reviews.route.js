import express from "express";
import { Router } from "express";

import {
  createReview,
  getReviewById,
  deleteReviewById,
} from "../controllers/reviews.controller.js";

const router = Router();

router.post("/", createReview);
router.get("/", getReviewById);
router.delete("/", deleteReviewById);

export default router;
