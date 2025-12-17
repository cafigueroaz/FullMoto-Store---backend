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
  getProductsByBrand,
  getProductsByCompatibility,
} from "../controllers/products.controllers.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";

const router = Router();

// Products:
router.post("/", [authenticationUser, authorizationUser], createProduct);
router.get("/", getAllProducts);
router.get("/marcas", getProductsByBrand);
router.get("/modelo", getProductsByCompatibility);
router.get("/price-range", getProductsByPriceRange);
router.get("/categorias", getProductByCategory);
router.get("/:idProduct", getProductById);
router.delete("/:idProduct", deleteProductById);
router.patch("/:idProduct", updateProductById);

export default router;
