import React from 'react';
import './header.css';
import logo from './logo/mecwinlogo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="header-right">
        <span>🌐 English</span>
        <span>👤 Admin</span>
      </div>
    </header>
  );
};

export default Header;
