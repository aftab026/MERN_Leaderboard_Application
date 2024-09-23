const express = require('express');
const router = express.Router();
const { claimPoints, getLeaderboard, createUser } = require('../controllers/userController');

// Route to claim points
router.post('/claim', claimPoints);

// Route to get leaderboard
router.get('/leaderboard', getLeaderboard);

// Route to create users
router.post('/users', createUser);

module.exports = router;



