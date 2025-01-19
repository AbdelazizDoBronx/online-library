// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Example of a protected route (you can add more protected routes here)
router.get('/profile', protect, (req, res) => {
  res.status(200).json({ message: 'Welcome to your profile!', userId: req.user.userId });
});

module.exports = router;
