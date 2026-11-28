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

  //Display individual categories
  const showCategory = async (req, res) => {
    try {
      const id = req.params.id;

      const category = await categoryManager.getCategoryById(id);

      if (!category) {
        return res.status(404).send("Category not found");
      }

      // render category details page
      res.render("categories/view", {
        category: category,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving category");
    }
  };

  return {
    showNewCategoryForm,
    addCategory,
    showCategory,
  };
};
