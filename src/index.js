import express from "express";
import dbConecction from "./config/mongo.config.js";
import userRoutes from "./routes/users.route.js";

import productRoutes from "./routes/products.route.js";

const app = express();
const PORT = 3000;

dbConecction();

app.get(`/health`, (req, res) => {
  res.json({ path: `/health`, msg: `Welcome to FullMoto` });
});

app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/products`, productRoutes);

app.listen(PORT, () => {
  console.log(`Server runnig on http://localhost:${PORT}`);
});

console.log("Project Moto BTA");
