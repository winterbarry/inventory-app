const express = require("express");

const router = express.Router();

const categoryController = require("../controllers/categoryController");

module.exports = (categoryManager) => {
  const controller = categoryController(categoryManager);

  // Display new category form
  router.get("/new", controller.showNewCategoryForm);

  // Handle category submission
  router.post("/", controller.addCategory);

  // Display individual category
  router.get("/:id", controller.showCategory);

  return router;
};
