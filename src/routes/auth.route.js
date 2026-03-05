import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { loginUser, reNewToken } from "../controllers/auth.controller.js";
import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";
import { withoutRole } from "../middlewares/without-role.middlewares.js";

const router = Router();

router.post("/register", withoutRole, createUser);
router.post("/login", loginUser);
router.get(
  "/renew-token",
  [authenticationUser, authorizationUser(["admin", "user", "staff"])],
  reNewToken,
);

export default router;
