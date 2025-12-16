import express from "express";
import dbConecction from "./config/mongo.config.js";
import productRoutes from "./routes/products.route.js";
import reviewRoutes from "./routes/reviews.route.js";
import userRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.route.js";
import categoryRoutes from "./routes/categories.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

dbConecction();

app.get(`/health`, (req, res) => {
  res.json({ path: `/health`, msg: `Welcome to FullMoto` });
});

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/products`, productRoutes);
app.use(`/api/v1/reviews`, reviewRoutes);
app.use(`/api/v1/categoria`, categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server runnig on http://localhost:${PORT}`);
});

console.log("Project FullMoto");
