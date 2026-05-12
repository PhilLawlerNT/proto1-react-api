const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { privateKey } = require('../middleware/auth');

const router = express.Router();

// Mock user for demo
const users = [{ id: 1, username: 'admin', password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' }]; // bcrypt hash for 'password'

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user.id, username: user.username }, privateKey, { algorithm: 'RS256', expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;