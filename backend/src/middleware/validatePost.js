const validatePost = (req, res, next) => {
  const { title, content, author } = req.body;

  if (!title || typeof title !== "string" || title.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "Title is required and must be at least 3 characters long",
    });
  }

  if (!content || typeof content !== "string" || content.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Content is required and must be at least 10 characters long",
    });
  }

  if (!author || typeof author !== "string" || !author.trim()) {
    return res.status(400).json({
      success: false,
      message: "Author is required",
    });
  }

  next();
};

module.exports = validatePost;