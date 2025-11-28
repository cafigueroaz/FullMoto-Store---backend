const express = require("express");
const dbConecction = require("./config/mongo.config.js");

const app = express();
const PORT = 3000;

dbConecction();

app.get(`/health`, (req, res) => {
  res.json({ path: `/health`, msg: `Welcome to FullMoto` });
});

app.use(`/api/v1/users`, require(`./routes/users.route.js`));
app.use(`/api/v1/products`, require(`./routes/products.route.js`));

app.listen(PORT, () => {
  console.log(`Server runnig on http://localhost:${PORT}`);
});

console.log("Project Moto BTA");
