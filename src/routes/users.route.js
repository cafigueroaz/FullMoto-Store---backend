import express from "express";
import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/users.controlers.js";

const router = Router();

// Users:
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:idUser", getUserById);

export default router;
