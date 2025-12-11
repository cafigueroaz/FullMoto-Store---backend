import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { loginUser } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
// router.get("/renew-token");

export default router;
