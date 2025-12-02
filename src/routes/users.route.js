import express from "express";
import { Router } from "express";
import { createUser } from "../controllers/users.controlers.js";
const router = Router();

router.post("/", createUser);

export default router;
