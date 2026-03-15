import express from "express";
import { Router } from "express";
import {getOrder, addItemToOrder, updateItemQuantity, confirmOrder, getMyOrders} from "../controllers/order.controller.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";

const router = Router();

router.get("/", authenticationUser, getOrder);
router.post("/", authenticationUser, addItemToOrder);
router.patch("/", authenticationUser, updateItemQuantity);
router.patch("/confirm", authenticationUser, confirmOrder);
router.get("/my-orders", authenticationUser, getMyOrders);
export default router;