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
router.post("/", [authenticationUser, authorizationUser(['admin'])], createUser);
router.get("/", [authenticationUser, authorizationUser(['admin'])], getAllUsers);
router.get("/:idUser", [authenticationUser, authorizationUser(['admin', 'user', 'colaborator', 'registered'])], getUserById);
router.delete(
  "/:idUser",
  [authenticationUser, authorizationUser(['admin'])],
  deleteUserById
);
router.patch(
  "/:idUser",
  [authenticationUser, authorizationUser(['admin', 'user', 'colaborator', 'registered'])],
  updateUserById
);

export default router;
