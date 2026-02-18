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
// Products:
router.delete("/:idProduct", [authenticationUser, authorizationUser(['admin'])], deleteProductById);
router.post("/", [authenticationUser, authorizationUser(['admin', 'colaborator'])], createProduct);
router.get("/", getAllProducts);
router.get("/marcas", getProductsByBrand);
router.get("/modelo", getProductsByCompatibility);
router.get("/price-range", getProductsByPriceRange);
router.get("/categorias", getProductByCategory);
router.get("/:idProduct", getProductById);

router.patch(
  "/:idProduct",
  [authenticationUser, authorizationUser(['admin', 'colaborator'])],
  updateProductById
);

export default router;
