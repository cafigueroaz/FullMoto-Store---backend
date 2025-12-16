import express from "express";
import { Router } from "express";

import {
  createReview,
  getReviewByProductId,
  deleteReviewById,
} from "../controllers/reviews.controller.js";

const router = Router();

router.post("/", createReview);
router.get("/", getReviewByProductId);
router.delete("/", deleteReviewById);

export default router;
