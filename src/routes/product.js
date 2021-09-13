const express = require("express");
const router = express.Router();

router.get("/products", (req, res, next) => {
  res.render("products");
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.send("recivided");
});

router.get("/addproduct", (req, res, next) => {
  res.render("addProduct");
});

router.post("/addproduct", (req, res, next) => {
  console.log(req.body);
  res.send("recivided");
});

router.get("/editproduct", (req, res, next) => {
  res.render("editProduct");
});

router.post("/editproduct", (req, res, next) => {
  console.log(req.body);
  res.send("recivided");
});

router.get("/deleteproduct", (req, res, next) => {
  res.render("addproduct");
});

router.post("/deleteproduct", (req, res, next) => {
  console.log(req.body);
  res.send("recivided");
});

module.exports = router;
