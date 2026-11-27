const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
} = require("../controllers/postsController");

// GET /api/posts - Get all posts
router.get("/", getAllPosts);

// GET /api/posts/:id - Get a single post
router.get("/:id", getPostById);

module.exports = router;