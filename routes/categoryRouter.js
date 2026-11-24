const express = require("express");
const router = express.Router();

module.exports = (categoryManager) => {
  router.get("/new", (req, res) => {
    res.render("categories/new");
  });

  // Handle new category submission
  router.post("/", (req, res) => {
    const { name, description } = req.body;

    categoryManager.addCategory(name, description);

    console.log(name);
    console.log(description);

    res.redirect("/");
  });

  return router;
};
