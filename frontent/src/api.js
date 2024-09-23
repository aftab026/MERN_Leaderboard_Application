import axios from 'axios';

const API_URL = 'http://localhost:5002/api';

// Create a new user
export const createUser = async (name) => {
  return await axios.post(`${API_URL}/users`, { name });
};

// Claim points for a user
// export const claimPoints = async (userId) => {
//   return await axios.post(`${API_URL}/claim`, { userId });
// };

// Claim points for a user
export const claimPoints = async (userId) => {
    try {
      return await axios.post(`${API_URL}/claim`, { userId });
    } catch (error) {
      console.error('Claim Points API Error:', error.response || error.message);
      throw error;
    }
  };

// Get the leaderboard data
export const getLeaderboard = async () => {
  return await axios.get(`${API_URL}/leaderboard`);
};
