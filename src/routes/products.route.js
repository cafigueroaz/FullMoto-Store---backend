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

router.delete(
  "/:idProduct",
  // [authenticationUser, authorizationUser(["admin", "staff"])],
  deleteProductById,
);
router.post(
  "/",
  // [authenticationUser, authorizationUser(["admin", "staff"])],
  createProduct,
);

router.get("/", getAllProducts);
router.get("/marcas", getProductsByBrand);
router.get("/modelo", getProductsByCompatibility);
router.get("/price-range", getProductsByPriceRange);
router.get("/categorias", getProductByCategory);
router.get("/:idProduct", getProductById);

router.patch(
  "/:idProduct",
  // [authenticationUser, authorizationUser(["admin", "staff"])],
  updateProductById,
);

export default router;
