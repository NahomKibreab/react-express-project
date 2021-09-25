const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./db");

// Sample GET route
app.get("/api", (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

app.get("/days", (req, res) => {
  db.query(
    `
    SELECT * from days;
  `
  ).then((data) => res.json(data.rows));
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
