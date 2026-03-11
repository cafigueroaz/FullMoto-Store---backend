import { Router } from "express";
import {
  getCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../controllers/cart.controller.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";

const router = Router();

router.get("/", authenticationUser, getCart);
router.post("/", authenticationUser, addItemToCart);
router.patch("/", authenticationUser, updateItemQuantity);
router.delete("/clear", authenticationUser, clearCart);
router.delete("/:productId", authenticationUser, removeItemFromCart);

export default router;
