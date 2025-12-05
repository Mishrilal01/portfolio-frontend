import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <span className="logo-text">Mishrilal</span>
            <span className="logo-dot">.</span>
          </a>
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#resume" className="navbar-link">Resume</a>
          <a href="#contact" className="navbar-link">Contact</a>
          
          <button 
            className="theme-toggle-mobile" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="navbar-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
