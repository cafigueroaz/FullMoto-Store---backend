import express from "express";
import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  getProductByCategory,
  getProductsByPriceRange,
} from "../controllers/products.controllers.js";

const router = Router();

// Products:
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/price-range", getProductsByPriceRange);
router.get("/categorias", getProductByCategory);
router.get("/:idProduct", getProductById);
router.delete("/:idProduct", deleteProductById);
router.patch("/:idProduct", updateProductById);

export default router;
