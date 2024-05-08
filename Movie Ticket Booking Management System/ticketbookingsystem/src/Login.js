import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Login.css'; // Import your Login.css file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Make API call using Axios
      const response = await axios.post('http://localhost:8090/movie/login', {
        email,
        password,
        UsetType: 0
      });

      // Check response status
      if (response.status === 200) {
        // If login successful, redirect to homepage
        history('/movieslist');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>LOGIN</h1>
        <p>Please enter your login and password!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <a href="/forgot-password">Forgot password?</a>
          <button type="submit">LOGIN</button>
        </form>
        <div className="social-login">
          <button className="facebook">f</button>
          <button className="twitter">t</button>
          <button className="google">G</button>
        </div>
        <h5 className="serif">
          Don't have an account?{' '}
          <NavLink to="/register" exact activeStyle={{ color: 'magenta' }}>
            Click here
          </NavLink>
        </h5>
      </div>
    </div>
  );
};

export default Login;
