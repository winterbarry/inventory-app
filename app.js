const express = require("express");
const path = require("path");

const app = express();

const CategoryManager = require("./storages/categoryManager");

// Import category router
const categoryRouter = require("./routes/categoryRouter");

// Create CategoryManager object
const categoryManager = new CategoryManager();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// Dashboard route
app.get("/", (req, res) => {
  const categories = categoryManager.getAllCategories();

  res.render("index", {
    categories: categories,
  });
});

// Category routes
app.use("/categories", categoryRouter(categoryManager));

// Start server
const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running at http://localhost:${PORT}`);
});
