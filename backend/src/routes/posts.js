const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postsController");

// GET all posts
router.get("/", getAllPosts);

// GET one post by ID
router.get("/:id", getPostById);

// CREATE a post
router.post("/", createPost);

// UPDATE a post
router.put("/:id", updatePost);

// DELETE a post
router.delete("/:id", deletePost);

// LIKE a post
router.patch("/:id/like", likePost);

module.exports = router;