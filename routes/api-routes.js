const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
  res.json({ mes: "FULL STACK YEEAAH" });
});

router.get("/api/test2", (req, res) => {
  res.json({ mes: "this is the second test" });
});

module.exports = router;
