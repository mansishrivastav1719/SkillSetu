import React from 'react';

const ProfileCard = ({ userData }) => {
  return (
    <div style={containerStyles}>
      {/* Profile Header */}
      <div style={headerStyles}>
        <div style={avatarSectionStyles}>
          <div style={avatarStyles}>👤</div>
          <div>
            <h1 style={nameStyles}>
              {userData.name}
              {userData.isVerified && <span style={verifiedBadgeStyles}>✅</span>}
            </h1>
            <p style={roleStyles}>Learner at SkillSetu</p>
          </div>
        </div>
        <button style={editButtonStyles}>Edit Profile</button>
      </div>

      {/* Progress Bar */}
      <div style={progressSectionStyles}>
        <div style={progressHeaderStyles}>
          <span style={progressLabelStyles}>Profile Completion</span>
          <span style={progressPercentageStyles}>{userData.progress}%</span>
        </div>
        <div style={progressBarStyles}>
          <div 
            style={{
              ...progressFillStyles,
              width: `${userData.progress}%`
            }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={statsGridStyles}>
        <div style={statCardStyles}>
          <div style={statIconStyles}>🎯</div>
          <div style={statContentStyles}>
            <div style={statNumberStyles}>{userData.stats.skillsVerified}</div>
            <div style={statLabelStyles}>Skills Verified</div>
          </div>
        </div>

        <div style={statCardStyles}>
          <div style={statIconStyles}>📁</div>
          <div style={statContentStyles}>
            <div style={statNumberStyles}>{userData.stats.projects}</div>
            <div style={statLabelStyles}>Projects</div>
          </div>
        </div>

        <div style={statCardStyles}>
          <div style={statIconStyles}>🎮</div>
          <div style={statContentStyles}>
            <div style={statNumberStyles}>{userData.stats.challenges}</div>
            <div style={statLabelStyles}>Challenges</div>
          </div>
        </div>

        <div style={statCardStyles}>
          <div style={statIconStyles}>👥</div>
          <div style={statContentStyles}>
            <div style={statNumberStyles}>{userData.stats.connections}</div>
            <div style={statLabelStyles}>Connections</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={activitySectionStyles}>
        <h3 style={sectionTitleStyles}>Recent Activity</h3>
        <div style={activityListStyles}>
          <div style={activityItemStyles}>
            <span style={activityIconStyles}>✅</span>
            <div style={activityContentStyles}>
              <p style={activityTextStyles}>
                <strong>React</strong> skill was verified by Mentor Sarah
              </p>
              <span style={activityTimeStyles}>2 days ago</span>
            </div>
          </div>
          <div style={activityItemStyles}>
            <span style={activityIconStyles}>📁</span>
            <div style={activityContentStyles}>
              <p style={activityTextStyles}>
                Added new project <strong>E-commerce Website</strong>
              </p>
              <span style={activityTimeStyles}>1 week ago</span>
            </div>
          </div>
          <div style={activityItemStyles}>
            <span style={activityIconStyles}>🎮</span>
            <div style={activityContentStyles}>
              <p style={activityTextStyles}>
                Joined <strong>30-Day Coding Challenge</strong>
              </p>
              <span style={activityTimeStyles}>2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyles = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '2rem',
};

const avatarSectionStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const avatarStyles = {
  fontSize: '3rem',
  width: '80px',
  height: '80px',
  backgroundColor: '#f7fafc',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid #e2e8f0',
};

const nameStyles = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#2d3748',
  margin: '0 0 0.25rem 0',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const verifiedBadgeStyles = {
  fontSize: '1.2rem',
};

const roleStyles = {
  color: '#718096',
  fontSize: '1.1rem',
  margin: 0,
};

const editButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.95rem',
};

const progressSectionStyles = {
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
};

const progressHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.75rem',
};

const progressLabelStyles = {
  fontWeight: '600',
  color: '#4a5568',
};

const progressPercentageStyles = {
  fontWeight: '700',
  color: '#667eea',
};

const progressBarStyles = {
  width: '100%',
  height: '8px',
  backgroundColor: '#e2e8f0',
  borderRadius: '4px',
  overflow: 'hidden',
};

const progressFillStyles = {
  height: '100%',
  backgroundColor: '#667eea',
  borderRadius: '4px',
  transition: 'width 0.3s ease',
};

const statsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem',
  marginBottom: '2rem',
};

const statCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  border: '1px solid #e2e8f0',
};

const statIconStyles = {
  fontSize: '2rem',
  width: '60px',
  height: '60px',
  backgroundColor: 'white',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const statContentStyles = {
  flex: 1,
};

const statNumberStyles = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#2d3748',
  lineHeight: '1',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
  marginTop: '0.25rem',
};

const activitySectionStyles = {
  borderTop: '1px solid #e2e8f0',
  paddingTop: '2rem',
};

const sectionTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '1.5rem',
};

const activityListStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const activityItemStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
};

const activityIconStyles = {
  fontSize: '1.2rem',
  marginTop: '0.1rem',
};

const activityContentStyles = {
  flex: 1,
};

const activityTextStyles = {
  margin: '0 0 0.25rem 0',
  color: '#4a5568',
  lineHeight: '1.5',
};

const activityTimeStyles = {
  fontSize: '0.85rem',
  color: '#718096',
};

export default ProfileCard;
