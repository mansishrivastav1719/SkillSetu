import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navbarStyles}>
      <div style={containerStyles}>
        {/* Logo */}
        <div style={logoStyles}>
          <Link to="/" style={logoLinkStyles}>
            <span style={logoIcon}>🎯</span>
            SkillSetu
          </Link>
        </div>

        {/* Navigation Links */}
        <div style={navLinksStyles}>
          <Link to="/" style={linkStyles}>Home</Link>
          <Link to="/about" style={linkStyles}>About</Link>
          <Link to="/login" style={linkStyles}>Login</Link>
          <Link to="/signup" style={buttonStyles}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

// Styles
const navbarStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  padding: '1rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyles = {
  fontSize: '1.5rem',
  fontWeight: '700',
};

const logoLinkStyles = {
  textDecoration: 'none',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const logoIcon = {
  fontSize: '1.8rem',
};

const navLinksStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

const buttonStyles = {
  textDecoration: 'none',
  backgroundColor: '#667eea',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  fontWeight: '600',
  transition: 'all 0.3s ease',
};

export default Navbar;
