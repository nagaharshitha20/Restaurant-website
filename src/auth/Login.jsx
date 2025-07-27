import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Login.css';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from "../Firebase";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ImageAssets } from '../ImageAssets'; // ✅ Make sure Loginpagebg is part of this

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSocialLogin = async (platform) => {
    try {
      let provider;
      switch (platform) {
        case 'google':
          provider = new GoogleAuthProvider();
          break;
        case 'github':
          provider = new GithubAuthProvider();
          break;
        case 'linkedin':
          alert("LinkedIn login not supported directly in Firebase.");
          return;
        default:
          return;
      }
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      className="login-container"
      sx={{
        backgroundImage: {xs:'none',md:`url(${ImageAssets.Loginpagebg})`},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="login-left">
        <div className="login-box">
          <h1>Log in to your account.</h1>
          <form onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>}

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

            <div className="input-group password-input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="social-login">
            <p>Or login with</p>
            <div className="social-icons">
              <button onClick={() => handleSocialLogin('google')} className="social-btn"><FcGoogle size={20} /></button>
              <button onClick={() => handleSocialLogin('github')} className="social-btn"><FaGithub size={20} /></button>
              <button onClick={() => handleSocialLogin('linkedin')} className="social-btn"><FaLinkedin size={20} /></button>
            </div>
          </div>

          <div className="register-link">
            Don’t have an account?
            <button onClick={() => navigate('/register')} className="signup-link">Create Account</button>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Login;
