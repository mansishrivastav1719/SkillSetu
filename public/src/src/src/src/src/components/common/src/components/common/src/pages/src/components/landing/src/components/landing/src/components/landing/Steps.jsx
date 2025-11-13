import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: '1',
      icon: '📝',
      title: 'Sign Up',
      description: 'Create your account as Learner, Mentor, or Recruiter'
    },
    {
      number: '2',
      icon: '🎯',
      title: 'Add Skills',
      description: 'List your skills and provide proof of your expertise'
    },
    {
      number: '3',
      icon: '✅',
      title: 'Request Verification',
      description: 'Get your skills verified by mentors and peers'
    },
    {
      number: '4',
      icon: '📁',
      title: 'Build Portfolio',
      description: 'Create a dynamic portfolio with verified skills'
    },
    {
      number: '5',
      icon: '🤝',
      title: 'Connect',
      description: 'Connect with recruiters and career opportunities'
    }
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>How It Works</h2>
        <p style={subtitleStyles}>
          Simple steps to get your skills verified and recognized
        </p>
        
        <div style={stepsContainerStyles}>
          {steps.map((step, index) => (
            <div key={index} style={stepCardStyles}>
              <div style={stepNumberStyles}>{step.number}</div>
              <div style={stepIconStyles}>{step.icon}</div>
              <h3 style={stepTitleStyles}>{step.title}</h3>
              <p style={stepDescriptionStyles}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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

const titleStyles = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#2d3748',
};

const subtitleStyles = {
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#718096',
  marginBottom: '3rem',
  maxWidth: '600px',
  margin: '0 auto 3rem',
};

const stepsContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '2rem',
};

const stepCardStyles = {
  backgroundColor: 'white',
  padding: '2.5rem 1.5rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  transition: 'transform 0.3s ease',
};

const stepNumberStyles = {
  position: 'absolute',
  top: '-15px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '40px',
  height: '40px',
  backgroundColor: '#667eea',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '1.2rem',
  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
};

const stepIconStyles = {
  fontSize: '3rem',
  marginBottom: '1rem',
  marginTop: '1rem',
};

const stepTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#2d3748',
};

const stepDescriptionStyles = {
  color: '#718096',
  lineHeight: '1.6',
  fontSize: '0.95rem',
};

export default Steps;
