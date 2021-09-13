const express = require("express");
const router = express.Router();

router.post("/addorder", (req, res, next) => {
  console.log(req.body);
  res.send("recivided");
});

router.get("/addorder", (req, res, next) => {
  res.render("orders");
});

router.post("/addorder", (req, res, next) => {
  console.log(req.body);
  res.send("recivided");
});

router.get("/orders", (req, res, next) => {
  res.render("orders");
});

module.exports = router;
