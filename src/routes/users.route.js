const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
  res.json([{ name: `Gabo`, edad: 14 }]);
});

module.exports = router;
