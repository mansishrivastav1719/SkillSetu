import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/landing/HeroSection';
import Features from '../components/landing/Features';
import Steps from '../components/landing/Steps';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem-Solution Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>From Static Certificates to Dynamic Proof</h2>
          <div style={gridStyles}>
            {/* Before SkillSetu */}
            <div style={cardStyles}>
              <h3 style={cardTitleStyles}>Before SkillSetu</h3>
              <ul style={listStyles}>
                <li style={listItemStyles}>❌ Static certificates</li>
                <li style={listItemStyles}>❌ No verification transparency</li>
                <li style={listItemStyles}>❌ Skills get outdated</li>
                <li style={listItemStyles}>❌ Limited employer trust</li>
              </ul>
            </div>
            
            {/* After SkillSetu */}
            <div style={cardStyles}>
              <h3 style={cardTitleStyles}>With SkillSetu</h3>
              <ul style={listStyles}>
                <li style={listItemStyles}>✅ Open verification system</li>
                <li style={listItemStyles}>✅ Dynamic skill portfolios</li>
                <li style={listItemStyles}>✅ Real-time skill updates</li>
                <li style={listItemStyles}>✅ Employer confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <Steps />

      {/* CTA Section */}
      <section style={ctaSectionStyles}>
        <div style={containerStyles}>
          <h2 style={ctaTitleStyles}>Ready to Transform Your Career?</h2>
          <p style={ctaTextStyles}>
            Join thousands of learners, mentors, and recruiters building the future of skill verification.
          </p>
          <div style={buttonGroupStyles}>
            <Link to="/signup" style={primaryButtonStyles}>
              Join Now - It's Free
            </Link>
            <Link to="/about" style={secondaryButtonStyles}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const sectionStyles = {
  padding: '5rem 0',
  backgroundColor: '#f8f9fa',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const sectionTitleStyles = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '3rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
};

const cardStyles = {
  backgroundColor: 'white',
  padding: '2.5rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const cardTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  color: '#333',
};

const listStyles = {
  listStyle: 'none',
  textAlign: 'left',
};

const listItemStyles = {
  padding: '0.5rem 0',
  fontSize: '1.1rem',
};

const ctaSectionStyles = {
  padding: '5rem 0',
  backgroundColor: '#667eea',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  textAlign: 'center',
};

const ctaTitleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
};

const ctaTextStyles = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
  opacity: '0.9',
};

const buttonGroupStyles = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const primaryButtonStyles = {
  backgroundColor: 'white',
  color: '#667eea',
  padding: '1rem 2rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.1rem',
  transition: 'transform 0.3s ease',
};

const secondaryButtonStyles = {
  backgroundColor: 'transparent',
  color: 'white',
  padding: '1rem 2rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.1rem',
  border: '2px solid white',
  transition: 'all 0.3s ease',
};

export default Home;
