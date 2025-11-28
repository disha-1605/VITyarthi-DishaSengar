const express = require('express');
const router = express.Router();

// Demo users (in-memory)
let users = [
  { id: 1, name: 'Instructor', role: 'instructor' },
  { id: 2, name: 'Student', role: 'student' }
];

router.get('/list', (req, res) => {
  res.json({ users });
});

module.exports = router;
