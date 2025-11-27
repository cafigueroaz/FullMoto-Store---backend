const express = require("express");

const app = express();

const PORT = 3000;

app.get(`/health`, (req, res) => {
  res.send(`<h1>Health</h1>`);
});

app.use(`/api/v1`, require(`./routes/users.route.js`));
app.use(`/api/v1`, require(`./routes/products.route.js`));

app.listen(PORT, () => {
  console.log(`Server runnig on http://localhost:${PORT}`);
});

console.log("Project Moto BTA");
