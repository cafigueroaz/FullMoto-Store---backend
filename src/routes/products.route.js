import express from "express";

const router = express.Router();

router.get(`/`, (req, res) => {
  res.json([{ name: `Casco AGV`, Price: 3000 }]);
});

export default router;
