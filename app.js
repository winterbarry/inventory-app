const express = require("express");
const path = require("path");

const CategoryManager = require("./storages/categoryManager");

const categoryRouter = require("./routes/categoryRouter");

const app = express();

// Create CategoryManager object
const categoryManager = new CategoryManager();

// Set EJS as the view engine
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// Dashboard route
app.get("/", async (req, res) => {
  try {
    const categories = await categoryManager.getAllCategories();

    res.render("index", {
      categories: categories,
    });
  } catch (error) {
    console.error("Error retrieving categories:", error);

    res.status(500).send("Unable to load dashboard.");
  }
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
