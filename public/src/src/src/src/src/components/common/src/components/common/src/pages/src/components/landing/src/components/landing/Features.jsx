import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '👥',
      title: 'Peer & Mentor Verification',
      description: 'Get your skills validated by experts and peers in the community.'
    },
    {
      icon: '📊',
      title: 'Dynamic Portfolios',
      description: 'Showcase your verified skills with proof and real project examples.'
    },
    {
      icon: '📈',
      title: 'Employability Insights',
      description: 'Get analytics on your skill growth and market demand for your expertise.'
    },
    {
      icon: '🌐',
      title: 'Community Networks',
      description: 'Connect with mentors, peers, and recruiters in your skill domain.'
    },
    {
      icon: '🎮',
      title: 'Gamified Challenges',
      description: 'Participate in skill-building challenges and earn recognition badges.'
    }
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>Key Features</h2>
        <p style={subtitleStyles}>
          Everything you need to showcase and verify your skills effectively
        </p>
        
        <div style={featuresContainerStyles}>
          {features.map((feature, index) => (
            <div key={index} style={featureCardStyles}>
              <div style={iconStyles}>{feature.icon}</div>
              <h3 style={featureTitleStyles}>{feature.title}</h3>
              <p style={featureDescriptionStyles}>{feature.description}</p>
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
  backgroundColor: 'white',
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

const featuresContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

const featureCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '2.5rem 2rem',
  borderRadius: '12px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid #e9ecef',
};

const iconStyles = {
  fontSize: '3rem',
  marginBottom: '1.5rem',
};

const featureTitleStyles = {
  fontSize: '1.4rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#2d3748',
};

const featureDescriptionStyles = {
  color: '#718096',
  lineHeight: '1.6',
  fontSize: '1rem',
};

export default Features;
