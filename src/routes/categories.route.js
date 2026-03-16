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

router.post(
  "/created",
  authenticationUser,
  authorizationUser(["admin", "staff"]),
  createCategory,
);
router.get("/", getAllCategories);
router.get("/:idcategory", getCategoryById);
router.patch(
  "/:idcategory",
  authenticationUser,
  authorizationUser(["admin", "staff"]),
  updateCategoryById,
);
router.delete(
  "/delete/:idcategory",
  authenticationUser,
  authorizationUser(["admin", "staff"]),
  deleteCategoryById,
);

export default router;
