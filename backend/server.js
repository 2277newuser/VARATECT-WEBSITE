
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("VARATECT Backend is running successfully!");
});

// API status route
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Varatect API is working!"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Varatect Backend running on port ${PORT}`);
});
