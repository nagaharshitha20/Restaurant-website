import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { initiateGoogleLogin, initiateGithubLogin, initiateLinkedinLogin} from '../services/authService';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === formData.username && u.password === formData.password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSocialLogin = (platform) => {
    switch (platform) {
      case 'google':
        initiateGoogleLogin();
        break;
      case 'github':
        initiateGithubLogin();
        break;
      case 'linkedin':
        initiateLinkedinLogin();
        break;
      default:
        console.error('Unknown platform');
    }
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
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
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="register-link">
          Don't have an account? <button onClick={handleSignUpClick} className="signup-link">Sign up</button>
        </div>
        <div className="social-login">
          <p>Or login with</p>
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
  );
}

export default Login; 