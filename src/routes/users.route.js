import express from "express";
import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  changePassword
} from "../controllers/users.controllers.js";

import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";

const router = Router();

// Users:
// Users:
router.post(
  "/",
  [authenticationUser, authorizationUser(["admin", "staff"])],
  createUser,
);
router.get(
  "/",
  [authenticationUser, authorizationUser(["admin"])],
  getAllUsers,
);
router.get(
  "/:idUser",
  [authenticationUser, authorizationUser(["admin", "user", "staff"])],
  getUserById,
);
router.delete(
  "/:idUser",
  [authenticationUser, authorizationUser(["admin"])],
  deleteUserById,
);
router.patch(
  "/:idUser",
  [authenticationUser, authorizationUser(["admin", "user", "staff"])],
  updateUserById,
);
router.patch(
  "/:idUser/change-password",
  [authenticationUser, authorizationUser(["admin", "user", "staff"])],
  changePassword,
);

export default router;
