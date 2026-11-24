const Category = require("./category");

class CategoryManager {
  constructor() {
    // Store categories in an array
    this.categories = [
      new Category(1, "Fruits & Vegetables", "Fresh fruits and vegetables"),

      new Category(2, "Dairy Products", "Milk, cheese and other dairy"),

      new Category(3, "Meat & Poultry", "Fresh meat and poultry"),

      new Category(4, "Beverages", "Drinks and refreshments"),

      new Category(5, "Bakery", "Bread, pastries and snacks"),

      new Category(6, "Canned Foods", "Canned and preserved foods"),
    ];
  }

  // Retrieve all categories
  getAllCategories() {
    return this.categories;
  }

  addCategory(name, description) {
    const id =
      this.categories.length > 0
        ? Math.max(...this.categories.map((category) => category.id)) + 1
        : 1;

    const category = new Category(id, name, description);

    this.categories.push(category);

    return category;
  }
}

module.exports = CategoryManager;
