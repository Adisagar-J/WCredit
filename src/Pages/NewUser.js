import React, { useState } from 'react';
import './NewUser.css'; // Import the CSS file

const NewUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="new-user-container">
      <form className="new-user-form" onSubmit={handleSubmit}>
        <h2>New User</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Mobile No:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="Commissioner">Commissioner</option>
          <option value="Customer">Customer</option>
          <option value="Sanitary Inspector">Sanitary Inspector</option>
          <option value="Staff">Staff</option>
        </select>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
