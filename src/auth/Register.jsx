import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { FcGoogle } from 'react-icons/fc';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,9}$/;

  // Username validation - letters, numbers, underscores, 3-20 characters
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

  const validateUsername = (username) => {
    if (!usernameRegex.test(username)) {
      return 'Username must be 3-20 characters long and can only contain letters, numbers, and underscores';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      return 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be 4-9 characters long';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate username
    const usernameError = validateUsername(formData.username);
    if (usernameError) {
      setError(usernameError);
      return;
    }

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setError(emailError);
      return;
    }

    // Validate password
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === formData.username)) {
      setError('Username already exists');
      return;
    }

    // Check if email already exists
    if (users.some(user => user.email === formData.email)) {
      setError('Email already exists');
      return;
    }

    // If all validations pass, proceed with registration
    users.push({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password
    });
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  const handleSocialSignup = (platform) => {
    // This would be implemented with actual OAuth integration
    console.log(`Signing up with ${platform}`);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-image"></div>
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <div className="login-link">
            Already have an account? <button onClick={handleLoginClick} className="login-link-btn">Log In</button>
          </div>
          <div className="social-signup">
            <p>Or Sign Up With</p>
            <div className="social-icons">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Go to Google"
              >
                <FcGoogle size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Go to GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Go to LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register; 