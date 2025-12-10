import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
const router = Router();

router.post("/login", createUser);
// router.post("/register");
// router.get("/renew-token");

export default router;
