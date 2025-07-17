import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h1>Create your account.</h1>
          <form onSubmit={handleSubmit} autoComplete="on">
            {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} method="post" autoComplete="on">

  <div className="input-group">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      required
      autoComplete="name"
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
      autoComplete="email"
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
      autoComplete="new-password"
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
      autoComplete="new-password"
    />
  </div>

</form>


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

          <div className="register-link">
            Already have an account?
            <button onClick={() => navigate('/login')} className="signup-link">Log In</button>
          </div>

          <div className="social-login">
            <p>Or sign up with</p>
            <div className="social-icons">
              <button className="social-btn" onClick={() => alert("Use Login to sign in with Google")}><FcGoogle size={20} /></button>
              <button className="social-btn" onClick={() => alert("Use Login to sign in with GitHub")}><FaGithub size={20} /></button>
              <button className="social-btn" onClick={() => alert("LinkedIn OAuth is not supported")}><FaLinkedin size={20} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <img src={ImageAssets.Minal} alt="background" className="masked-image" />
      </div>
    </div>
  );
}

export default Register;
