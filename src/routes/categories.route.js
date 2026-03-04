import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
} from "../controllers/categories.controllers.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";

const router = Router();

router.post("/created", createCategory);
router.get("/", getAllCategories);
router.get("/:idcategory", getCategoryById);
router.patch("/:idcategory", updateCategoryById);
router.delete("/delete/:idcategory", deleteCategoryById);

export default router;
