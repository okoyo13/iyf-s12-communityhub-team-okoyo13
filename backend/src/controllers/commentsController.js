const comments = require('../data/comments');
const posts = require('../data/posts'); // Wilfred's file: import only, never edit

const findPost = (id) => posts.find((p) => p.id === Number(id));

exports.getComments = (req, res) => {
  if (!findPost(req.params.postId)) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }
  res.status(200).json(comments.filter((c) => c.postId === Number(req.params.postId)));
};

exports.addComment = (req, res) => {
  if (!findPost(req.params.postId)) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }
  const { author, content } = req.body || {};
  if (!content || !content.trim()) {
    return res.status(400).json({ success: false, message: 'Content is required' });
  }
  const comment = {
    id: comments.length ? Math.max(...comments.map((c) => c.id)) + 1 : 1,
    postId: Number(req.params.postId),
    author: author || 'anonymous',
    content: content.trim(),
    createdAt: new Date().toISOString(),
  };
  comments.push(comment);
  res.status(201).json(comment);
};

exports.deleteComment = (req, res) => {
  if (!findPost(req.params.postId)) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }
  const i = comments.findIndex(
    (c) => c.id === Number(req.params.commentId) && c.postId === Number(req.params.postId)
  );
  if (i === -1) {
    return res.status(404).json({ success: false, message: 'Comment not found' });
  }
  const [removed] = comments.splice(i, 1);
  res.status(200).json({ success: true, message: 'Comment deleted', comment: removed });
};