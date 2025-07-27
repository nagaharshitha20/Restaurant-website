import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Login.css'; 
import {
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import { auth } from "../Firebase";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ImageAssets } from '../ImageAssets';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: false
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const persistence = formData.remember ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistence);

      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
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
          <h1>Create your account.</h1>
          <form onSubmit={handleSubmit} autoComplete="on">
            {error && <div className="error-message">{error}</div>}

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
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

            <div className="input-group password-input-group">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
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

            <button type="submit" className="login-button">Sign Up</button>
          </form>

          <div className="social-login">
            <p>Or sign up with</p>
            <div className="social-icons">
              <button className="social-btn" onClick={() => alert("Use login page for Google sign-in")}><FcGoogle size={20} /></button>
              <button className="social-btn" onClick={() => alert("Use login page for GitHub sign-in")}><FaGithub size={20} /></button>
              <button className="social-btn" onClick={() => alert("LinkedIn not supported")}><FaLinkedin size={20} /></button>
            </div>
          </div>

          <div className="register-link">
            Already have an account?
            <button onClick={() => navigate('/login')} className="signup-link">Log In</button>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Register;
