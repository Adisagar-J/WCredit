import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate  = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add authentication logic
    // On successful authentication, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="sign-in">
        <form onSubmit={handleLogin}>
          <h2>Sign-In</h2>
          <p>Access the W-Credit panel using your email and passcode.</p>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
      <div className="image">
        <img src="/path/to/recycle-image.png" alt="Recycle" />
      </div>
    </div>
  );
}

export default SignIn;
