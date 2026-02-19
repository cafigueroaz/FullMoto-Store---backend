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
// Users:
router.post("/", [authenticationUser, authorizationUser(['admin', 'staff'])], createUser);
router.get("/", [authenticationUser, authorizationUser(['admin', 'staff'])], getAllUsers);
router.get("/:idUser", [authenticationUser, authorizationUser(['admin', 'user', 'staff'])], getUserById);
router.delete(
  "/:idUser",
  [authenticationUser, authorizationUser(['admin', 'staff'])],
  deleteUserById
);
router.patch(
  "/:idUser",
  [authenticationUser, authorizationUser(['admin', 'user', 'staff'])],
  updateUserById
);

export default router;
