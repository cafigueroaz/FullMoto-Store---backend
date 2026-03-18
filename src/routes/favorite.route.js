import { getFavorites, addItemToFavorites, removeItemFromFavorites, clearFavorites } from "../controllers/favorite.controller.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";
import { Router } from "express";

const router = Router();

router.get("/", authenticationUser, getFavorites);
router.post("/", authenticationUser, addItemToFavorites);
router.delete("/clear", authenticationUser, clearFavorites);
router.delete("/:productId", authenticationUser, removeItemFromFavorites);

export default router;