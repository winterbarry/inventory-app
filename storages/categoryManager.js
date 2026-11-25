const pool = require("../db/pool");
const Category = require("./category");

class CategoryManager {
  async getAllCategories() {
    const result = await pool.query("SELECT * FROM categories ORDER BY id ASC");

    return result.rows.map(
      (row) => new Category(row.id, row.name, row.description),
    );
  }

  async addCategory(name, description) {
    const result = await pool.query(
      `INSERT INTO categories (name, description)
    VALUES ($1, $2)
    RETURNING *`,
      [name, description],
    );

    const row = result.rows[0];

    return new Category(row.id, row.name, row.description);
  }
}

module.exports = CategoryManager;
