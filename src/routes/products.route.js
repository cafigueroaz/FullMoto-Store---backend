const express = require(`express`);
const router = express.Router();

router.get(`/product`, (req, res) => {
  res.json([{ name: `Casco AGV`, Price: 3000 }]);
});

module.exports = router;
