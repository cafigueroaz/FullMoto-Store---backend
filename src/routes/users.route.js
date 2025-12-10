import express from "express";
import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.controllers.js";

const router = Router();

// Users:
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:idUser", getUserById);
router.delete("/:idUser", deleteUserById);
router.patch("/:idUser", updateUserById);

export default router;
