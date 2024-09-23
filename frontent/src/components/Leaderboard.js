import React from 'react';

function Leaderboard({ data, onClaimPoints }) {
  return (
    <div className="mt-5">
      <h2>Leaderboard</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Points</th>
            <th>Action</th> {/* Claim Points Button */}
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.userId}>
              <td>{user.rank}</td> {/* Display user rank */}
              <td>{user.name}</td> {/* Display user name */}
              <td>{user.totalPoints}</td> {/* Display total points */}
              <td>
                <button
                  onClick={() => onClaimPoints(user.userId)} // Call claim points for this user
                  className="btn btn-primary"
                >
                  Claim Points
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
