import React, { useState, useEffect } from 'react';
import { createUser, getLeaderboard, claimPoints } from './api'; // Import API functions
import AddUser from './components/AddUser';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [leaderboard, setLeaderboard] = useState([]); // State for leaderboard data
  // eslint-disable-next-line no-unused-vars
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user

  // Fetch leaderboard data when component mounts
  useEffect(() => {
    async function fetchLeaderboard() {
      const result = await getLeaderboard();
      setLeaderboard(result.data); // Set leaderboard data
    }

    fetchLeaderboard(); // Fetch leaderboard on component load
  }, []);

  // Function to handle adding a new user
  const handleAddUser = async (name) => {
    const newUser = await createUser(name);

    // Claim points for the new user after creation
    await claimPoints(newUser.data._id);

    // Refresh leaderboard after adding the user and claiming points
    const result = await getLeaderboard();
    setLeaderboard(result.data); // Update leaderboard
  };

  // Function to handle claiming points for a selected user
  const handleClaimPoints = async (userId) => {
    await claimPoints(userId);

    // Refresh leaderboard after claiming points
    const result = await getLeaderboard();
    setLeaderboard(result.data); // Update leaderboard
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Leaderboard App</h1>

      {/* Add user component */}
      <AddUser onAddUser={handleAddUser} />

      {/* Leaderboard component */}
      <Leaderboard
        data={leaderboard}
        onClaimPoints={handleClaimPoints} // Pass claim points function to leaderboard
      />
    </div>
  );
}

export default App;
