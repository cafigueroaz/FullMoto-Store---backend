import express from "express";
import { createProduct } from "../controllers/products.controllers";

const router = express.Router();

router.get(`/`, (req, res) => {
  res.json([{ name: `Casco AGV`, Price: 3000 }]);
});

router.post("/", createProduct);

export default router;
