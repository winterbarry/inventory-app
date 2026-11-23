const express = require("express");
const path = require("path");

const app = express();

// Import category router
const categoryRouter = require("./routes/categoryRouter");

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// Dashboard route
app.get("/", (req, res) => {
  res.render("index");
});

// category routes
app.use("/categories", categoryRouter);

// Start server
const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running at http://localhost:${PORT}`);
});
