const express = require("express");
const router = express.Router();

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Project route working");
});

module.exports = router;