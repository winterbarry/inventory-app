const express = require("express");
const path = require("path");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Dashboard route
app.get("/", (req, res) => {
  res.render("index");
});

// Start server
const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running at http://localhost:${PORT}`);
});
