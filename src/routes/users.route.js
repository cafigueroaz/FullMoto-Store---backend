import express from "express";
const router = express.Router();

router.get(`/`, (req, res) => {
  res.json([{ name: `Gabo`, edad: 14 }]);
});

export default router;
