const users = require('../data/users');

const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

exports.getUsers = (req, res) => res.status(200).json(users);

exports.getUser = (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.status(200).json(user);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !name.trim()) return res.status(400).json({ success: false, message: 'Name is required' });
  if (!email || !emailOk(email)) return res.status(400).json({ success: false, message: 'Valid email is required' });
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return res.status(400).json({ success: false, message: 'Email already exists' });
  }
  const user = {
    id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    name: name.trim(),
    email: email.trim(),
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  res.status(201).json(user);
};