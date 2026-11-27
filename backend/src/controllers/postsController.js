const posts = require("../data/posts");

// GET all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts,
  });
};

// GET a single post by ID
const getPostById = (req, res) => {
  const postId = Number(req.params.id);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  res.status(200).json({
    success: true,
    data: post,
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};