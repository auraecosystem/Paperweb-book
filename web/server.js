const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const html = fs.readFileSync("output.html", "utf-8");
  res.send(html);
});

app.listen(3000, () => {
  console.log("📚 Paperweb running: http://localhost:3000");
});
