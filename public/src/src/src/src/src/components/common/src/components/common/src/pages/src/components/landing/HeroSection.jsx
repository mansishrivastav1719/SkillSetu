import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section style={heroStyles}>
      <div style={containerStyles}>
        <div style={contentStyles}>
          {/* Text Content */}
          <div style={textContentStyles}>
            <h1 style={titleStyles}>
              Bridging Skills to <span style={highlightStyles}>Opportunities</span>
            </h1>
            <p style={subtitleStyles}>
              Show verified skills. Get recognized. Grow your career.
            </p>
            <div style={buttonGroupStyles}>
              <Link to="/signup" style={primaryButtonStyles}>
                Join Now
              </Link>
              <Link to="/about" style={secondaryButtonStyles}>
                Explore
              </Link>
            </div>
          </div>

          {/* Illustration/Image Placeholder */}
          <div style={illustrationStyles}>
            <div style={networkGraphStyles}>
              <div style={nodeStyles}></div>
              <div style={nodeStyles}></div>
              <div style={nodeStyles}></div>
              <div style={connectionStyles}></div>
              <div style={connectionStyles}></div>
              <div style={connectionStyles}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const heroStyles = {
  padding: '6rem 0 4rem',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
};

const textContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const titleStyles = {
  fontSize: '3.5rem',
  fontWeight: '800',
  lineHeight: '1.2',
  color: '#2d3748',
  margin: 0,
};

const highlightStyles = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const subtitleStyles = {
  fontSize: '1.4rem',
  color: '#4a5568',
  lineHeight: '1.6',
  margin: 0,
};

const buttonGroupStyles = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const primaryButtonStyles = {
  backgroundColor: '#667eea',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '1rem 2rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
};

const secondaryButtonStyles = {
  backgroundColor: 'transparent',
  color: '#667eea',
  padding: '1rem 2rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.1rem',
  border: '2px solid #667eea',
  transition: 'all 0.3s ease',
};

const illustrationStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const networkGraphStyles = {
  position: 'relative',
  width: '400px',
  height: '300px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
};

const nodeStyles = {
  position: 'absolute',
  width: '60px',
  height: '60px',
  backgroundColor: '#667eea',
  borderRadius: '50%',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
};

const connectionStyles = {
  position: 'absolute',
  height: '3px',
  backgroundColor: '#667eea',
  opacity: '0.6',
};

export default HeroSection;
