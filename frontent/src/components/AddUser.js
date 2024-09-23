import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState(''); // State for name input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAddUser(name); // Call parent function to add user
      setName(''); // Reset input field
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update input state
        />
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
