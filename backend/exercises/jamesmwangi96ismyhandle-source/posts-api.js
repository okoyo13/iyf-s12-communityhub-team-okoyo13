const express = require('express');

const app = express();
// Port 4000 so this exercise never clashes with the real API on 5000
const PORT = process.env.PORT || 4000;

// In-memory data
const posts = [
  { id: 1, title: 'Getting Started with Node.js', content: 'Node.js runs JavaScript outside the browser.', author: 'amina', createdAt: '2026-11-02T09:00:00Z', likes: 12 },
  { id: 2, title: 'Express Routing in Ten Minutes', content: 'A route is a method, a path and a handler.', author: 'brian', createdAt: '2026-11-05T14:30:00Z', likes: 30 },
  { id: 3, title: 'Why Status Codes Matter', content: '200, 201, 400, 404: the client reads the number first.', author: 'amina', createdAt: '2026-11-08T08:15:00Z', likes: 7 },
  { id: 4, title: 'Query Strings vs Route Params', content: 'Params name the thing. Query strings filter the list.', author: 'cyrus', createdAt: '2026-11-10T17:45:00Z', likes: 19 },
];

// STEP 1 - Welcome and health endpoints
app.get('/', (req, res) => {
  res.send('Welcome to CommunityHub API');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// STEP 2, 4 and 5 - List posts with filtering, searching, sorting, pagination
// Examples: /api/posts?author=amina  /api/posts?search=node
//           /api/posts?sort=popular  /api/posts?page=1&limit=2
app.get('/api/posts', (req, res) => {
  const { author, search, sort, page = 1, limit = 10 } = req.query;
  let result = [...posts];

  if (author) {
    result = result.filter((p) => p.author.toLowerCase() === author.toLowerCase());
  }
  if (search) {
    const term = search.toLowerCase();
    result = result.filter(
      (p) => p.title.toLowerCase().includes(term) || p.content.toLowerCase().includes(term)
    );
  }

  if (sort === 'newest') {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === 'oldest') {
    result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (sort === 'popular') {
    result.sort((a, b) => b.likes - a.likes);
  }

  const pageNum = Math.max(1, Number(page) || 1);
  const limitNum = Math.max(1, Number(limit) || 10);
  const total = result.length;
  const start = (pageNum - 1) * limitNum;

  res.status(200).json({
    page: pageNum,
    limit: limitNum,
    total,
    totalPages: Math.ceil(total / limitNum),
    posts: result.slice(start, start + limitNum),
  });
});

// STEP 3 - Get one post by id
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }
  res.status(200).json(post);
});

// STEP 6 - 404 handler (must come after all routes)
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.method} ${req.originalUrl} not found` });
});

app.listen(PORT, () => {
  console.log(`Posts API running at http://localhost:${PORT}`);
});