import express from "express";
import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.controllers.js";

import authenticationUser from "../middlewares/authentication.middlewares.js";
import authorizationUser from "../middlewares/authorization.middlewares.js";

const router = Router();

// Users:
router.post("/", [authenticationUser, authorizationUser], createUser);
router.get("/", [authenticationUser, authorizationUser], getAllUsers);
router.get("/:idUser", [authenticationUser, authorizationUser], getUserById);
router.delete(
  "/:idUser",
  [authenticationUser, authorizationUser],
  deleteUserById
);
router.patch(
  "/:idUser",
  [authenticationUser, authorizationUser],
  updateUserById
);

export default router;
