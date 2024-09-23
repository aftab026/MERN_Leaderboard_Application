const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for handling requests from frontend

// Routes
app.use('/api', userRoutes);

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
