// src/components/AuthLayout.js
import React from 'react';
import './Login.css';
import { ImageAssets } from '../ImageAssets';

const AuthLayout = ({ children, reverse = false }) => {
  return (
    <div className={`auth-page-container ${reverse ? 'reverse' : ''}`}>
      <div className="login-right">
        <img src={ImageAssets.Minal} alt="background" className="img" />
      </div>
      <div className="login-left">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
