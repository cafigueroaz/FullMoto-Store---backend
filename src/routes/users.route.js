import express from "express";
import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/users.controlers.js";

const router = Router();

// Users:
router.post("/", createUser);
router.get("/", getAllUsers);

export default router;
