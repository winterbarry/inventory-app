module.exports = (categoryManager) => {
  // Display the new category form
  const showNewCategoryForm = (req, res) => {
    res.render("categories/new");
  };

  // Handle new category submission
  const addCategory = async (req, res) => {
    try {
      const { name, description } = req.body;

      // Validate category name
      if (!name || !name.trim()) {
        return res.status(400).send("Category name is required.");
      }

      // Save category in PostgreSQL
      const category = await categoryManager.addCategory(
        name.trim(),
        description ? description.trim() : "",
      );

      console.log("New category added:", category);

      // Redirect to homepage
      res.redirect("/");
    } catch (error) {
      console.error("Error adding category:", error);

      res.status(500).send("Unable to add category.");
    }
  };

  return {
    showNewCategoryForm,
    addCategory,
  };
};
