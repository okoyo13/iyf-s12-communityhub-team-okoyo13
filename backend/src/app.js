const express = require("express");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api", routes);
// Day 1: Hello Server
app.get("/", (req, res) => {
  res.send("Welcome to CommunityHub!");
});

app.get("/about", (req, res) => {
  res.send("CommunityHub API - A platform for connecting communities.");
});

app.get("/api/time", (req, res) => {
  res.json({
    currentTime: new Date().toISOString(),
  });
});

// Error handler (last)
app.use(errorHandler);

module.exports = app;
