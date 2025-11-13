import React from 'react';

const CandidateCard = ({ candidate, onInterviewInvite, onConnect }) => {
  const getMatchScoreColor = (score) => {
    if (score >= 90) return '#38a169';
    if (score >= 80) return '#dd6b20';
    return '#e53e3e';
  };

  const getExperienceColor = (experience) => {
    if (experience.includes('5+')) return '#38a169';
    if (experience.includes('2-5')) return '#dd6b20';
    return '#e53e3e';
  };

  return (
    <div style={cardStyles}>
      {/* Candidate Header */}
      <div style={headerStyles}>
        <div style={avatarSectionStyles}>
          <div style={avatarStyles}>👤</div>
          <div style={candidateInfoStyles}>
            <h3 style={nameStyles}>{candidate.name}</h3>
            <p style={titleStyles}>{candidate.title}</p>
            <div style={metaInfoStyles}>
              <span style={metaItemStyles}>📍 {candidate.location}</span>
              <span style={metaItemStyles}>•</span>
              <span style={metaItemStyles}>🕒 {candidate.lastActive}</span>
            </div>
          </div>
        </div>
        <div style={matchScoreStyles({
          color: getMatchScoreColor(candidate.matchScore)
        })}>
          {candidate.matchScore}% Match
        </div>
      </div>

      {/* Skills Section */}
      <div style={skillsSectionStyles}>
        <h4 style={sectionTitleStyles}>Verified Skills</h4>
        <div style={skillsListStyles}>
          {candidate.skills.map((skill, index) => (
            <span key={index} style={skillTagStyles}>
              {skill} ✅
            </span>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={statsSectionStyles}>
        <div style={statItemStyles}>
          <div style={statNumberStyles}>{candidate.verifiedCount}</div>
          <div style={statLabelStyles}>Skills Verified</div>
        </div>
        <div style={statItemStyles}>
          <div style={{
            ...statNumberStyles,
            color: getExperienceColor(candidate.experience)
          }}>
            {candidate.experience}
          </div>
          <div style={statLabelStyles}>Experience</div>
        </div>
        <div style={statItemStyles}>
          <div style={statNumberStyles}>4.8</div>
          <div style={statLabelStyles}>Rating</div>
        </div>
      </div>

      {/* Portfolio Link */}
      <div style={portfolioSectionStyles}>
        <a 
          href={candidate.portfolio} 
          target="_blank" 
          rel="noopener noreferrer"
          style={portfolioLinkStyles}
        >
          🔗 View Portfolio & Projects
        </a>
      </div>

      {/* Action Buttons */}
      <div style={actionButtonsStyles}>
        <button 
          onClick={() => onConnect(candidate.id)}
          style={connectButtonStyles}
        >
          Connect
        </button>
        <button 
          onClick={() => onInterviewInvite(candidate.id)}
          style={interviewButtonStyles}
        >
          Interview Invite
        </button>
      </div>

      {/* Quick Actions */}
      <div style={quickActionsStyles}>
        <button style={quickActionButtonStyles}>📋 View Resume</button>
        <button style={quickActionButtonStyles}>💬 Message</button>
        <button style={quickActionButtonStyles}>⭐ Save</button>
      </div>
    </div>
  );
};

// Styles
const cardStyles = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1.5rem',
};

const avatarSectionStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
};

const avatarStyles = {
  fontSize: '2.5rem',
  width: '60px',
  height: '60px',
  backgroundColor: '#f7fafc',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #e2e8f0',
  flexShrink: 0,
};

const candidateInfoStyles = {
  flex: 1,
};

const nameStyles = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#2d3748',
  margin: '0 0 0.25rem 0',
};

const titleStyles = {
  fontSize: '1rem',
  color: '#667eea',
  fontWeight: '600',
  margin: '0 0 0.5rem 0',
};

const metaInfoStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  flexWrap: 'wrap',
};

const metaItemStyles = {
  fontSize: '0.85rem',
  color: '#718096',
};

const matchScoreStyles = ({ color }) => ({
  backgroundColor: color,
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '700',
  whiteSpace: 'nowrap',
});

const skillsSectionStyles = {
  marginBottom: '1.5rem',
};

const sectionTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#4a5568',
  margin: '0 0 0.75rem 0',
};

const skillsListStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const skillTagStyles = {
  backgroundColor: '#f0fff4',
  color: '#22543d',
  padding: '0.4rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '600',
  border: '1px solid #c6f6d5',
};

const statsSectionStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  marginBottom: '1.5rem',
  padding: '1rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
};

const statItemStyles = {
  textAlign: 'center',
};

const statNumberStyles = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#667eea',
  lineHeight: '1',
  marginBottom: '0.25rem',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.75rem',
  fontWeight: '600',
  textTransform: 'uppercase',
};

const portfolioSectionStyles = {
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const portfolioLinkStyles = {
  color: '#667eea',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '0.9rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #bae6fd',
  transition: 'all 0.2s ease',
};

const actionButtonsStyles = {
  display: 'flex',
  gap: '0.75rem',
  marginBottom: '1rem',
};

const connectButtonStyles = {
  flex: 1,
  backgroundColor: 'transparent',
  color: '#667eea',
  border: '2px solid #667eea',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease',
};

const interviewButtonStyles = {
  flex: 1,
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease',
};

const quickActionsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.5rem',
};

const quickActionButtonStyles = {
  backgroundColor: 'transparent',
  color: '#718096',
  border: '1px solid #e2e8f0',
  padding: '0.5rem 0.75rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: '600',
  flex: 1,
  transition: 'all 0.2s ease',
};

export default CandidateCard;
