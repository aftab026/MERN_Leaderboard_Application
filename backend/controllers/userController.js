const User = require('../models/user');
const History = require('../models/history');

// Create a new user
exports.createUser = async (req, res) => {
  const { name } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name });
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Claim points
exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1; // Random points between 1-10

  try {
    const user = await User.findById(userId);
    if (user) {
      user.totalPoints += points;
      await user.save();

      // Save to history
      await History.create({ userId, points });

      return res.json({
        success: true,
        message: 'Points claimed successfully!',
        userId: user._id,
        pointsAwarded: points,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map((user, index) => ({
      userId: user._id,
      name: user.name,
      totalPoints: user.totalPoints,
      rank: index + 1,
    }));
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
