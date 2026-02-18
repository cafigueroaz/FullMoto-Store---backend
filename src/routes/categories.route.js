import { Router } from "express";
import { createCategory, getAllCategories, getCategoryById, deleteCategoryById, updateCategoryById } from "../controllers/categories.controllers.js"
import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";

const router = Router();

router.post("/created", [authenticationUser, authorizationUser(['admin', 'colaborator'])], createCategory);
router.get("/get-all", getAllCategories);
router.get("/get-by-id/:idcategory", getCategoryById);
router.patch("/update/:idcategory", [authenticationUser, authorizationUser(['admin', 'colaborator'])], updateCategoryById);
router.delete("/delete/:idcategory", [authenticationUser, authorizationUser(['admin'])], deleteCategoryById);

export default router;
