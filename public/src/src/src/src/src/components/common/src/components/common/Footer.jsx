import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={contentStyles}>
          {/* Left Section - Logo and description */}
          <div style={logoSectionStyles}>
            <div style={logoStyles}>
              <span style={logoIcon}>🎯</span>
              SkillSetu
            </div>
            <p style={descriptionStyles}>
              Bridging Skills to Opportunities. Show verified skills. Get recognized. Grow your career.
            </p>
          </div>

          {/* Right Section - Links */}
          <div style={linksSectionStyles}>
            <div style={linkGroupStyles}>
              <h4 style={headingStyles}>Company</h4>
              <Link to="/about" style={linkStyles}>About</Link>
              <Link to="/contact" style={linkStyles}>Contact</Link>
              <a href="#" style={linkStyles}>Terms</a>
              <a href="#" style={linkStyles}>Privacy</a>
            </div>
            
            <div style={linkGroupStyles}>
              <h4 style={headingStyles}>Connect</h4>
              <a href="#" style={linkStyles}>LinkedIn</a>
              <a href="#" style={linkStyles}>GitHub</a>
              <a href="#" style={linkStyles}>Email</a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div style={bottomStyles}>
          <p style={copyrightStyles}>
            © 2024 SkillSetu. Built with ❤️ by Team ByteForce.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Styles
const footerStyles = {
  backgroundColor: '#2d3748',
  color: 'white',
  padding: '3rem 0 1rem',
  marginTop: 'auto',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3rem',
  marginBottom: '2rem',
};

const logoSectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const logoStyles = {
  fontSize: '1.5rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const logoIcon = {
  fontSize: '1.8rem',
};

const descriptionStyles = {
  color: '#cbd5e0',
  lineHeight: '1.6',
  maxWidth: '300px',
};

const linksSectionStyles = {
  display: 'flex',
  gap: '3rem',
  justifyContent: 'flex-end',
};

const linkGroupStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const headingStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: 'white',
};

const linkStyles = {
  color: '#cbd5e0',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const bottomStyles = {
  borderTop: '1px solid #4a5568',
  paddingTop: '1.5rem',
  textAlign: 'center',
};

const copyrightStyles = {
  color: '#a0aec0',
  fontSize: '0.9rem',
};

export default Footer;
