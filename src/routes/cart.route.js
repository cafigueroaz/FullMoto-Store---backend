import { Router } from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  clearCart,
  removeFromCart,
} from "../controllers/cart.controller.js";
import { loginUser, reNewToken } from "../controllers/auth.controller.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";

const router = Router();

router.get("/", [authenticationUser, authorizationUser(['admin', 'user', 'staff'])], getCart);

export default router;
