const store = require("../data/store");

// GET all posts
// Supports author filtering, search, sorting, and pagination
const getAllPosts = (req, res) => {
  let posts = [...store.posts];

  // Filter by author
  if (req.query.author) {
    posts = posts.filter((post) =>
      post.author.toLowerCase().includes(req.query.author.toLowerCase()),
    );
  }

  // Search title and content
  if (req.query.search) {
    const searchTerm = req.query.search.toLowerCase();

    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm),
    );
  }

  // Sort posts
  if (req.query.sort === "popular") {
    posts.sort((a, b) => b.likes - a.likes);
  } else if (req.query.sort === "newest") {
    posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  }

  // Pagination
  if (req.query.page || req.query.limit) {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 10);

    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / limit);
    const startIndex = (page - 1) * limit;

    const paginatedPosts = posts.slice(startIndex, startIndex + limit);

    return res.status(200).json({
      data: paginatedPosts,
      pagination: {
        totalPosts,
        currentPage: page,
        totalPages,
        limit,
      },
    });
  }

  res.status(200).json(posts);
};

// GET a single post by ID
const getPostById = (req, res) => {
  const postId = Number(req.params.id);

  const post = store.posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json(post);
};

// CREATE a post
const createPost = (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      error: "Title, content, and author are required",
    });
  }

  const newPost = {
    id: store.nextId++,
    title,
    content,
    author,
    likes: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  store.posts.push(newPost);

  res.status(201).json(newPost);
};

// UPDATE a post
const updatePost = (req, res) => {
  const postId = Number(req.params.id);

  const post = store.posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const { title, content, author } = req.body;

  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  if (author !== undefined) post.author = author;

  post.updatedAt = new Date().toISOString();

  res.status(200).json(post);
};

// DELETE a post
const deletePost = (req, res) => {
  const postId = Number(req.params.id);

  const postIndex = store.posts.findIndex((post) => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  store.posts.splice(postIndex, 1);

  res.status(200).json({
    message: "Post deleted successfully",
  });
};

// LIKE a post
const likePost = (req, res) => {
  const postId = Number(req.params.id);

  const post = store.posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  post.likes += 1;

  res.status(200).json({
    message: "Post liked successfully",
    data: post,
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
};