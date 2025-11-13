import React from 'react';

const LeaderboardCard = ({ data }) => {
  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return '#FFD700'; // Gold
      case 2: return '#C0C0C0'; // Silver
      case 3: return '#CD7F32'; // Bronze
      default: return '#667eea';
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getSpecialtyColor = (specialty) => {
    const colors = {
      'Full-Stack': '#667eea',
      'Frontend': '#ed8936',
      'Backend': '#38a169',
      'Data Science': '#9f7aea',
      'UI/UX': '#ed64a6',
      'Mobile': '#4299e1',
      'Multiple': '#718096'
    };
    return colors[specialty] || '#718096';
  };

  return (
    <div style={containerStyles}>
      {/* Header */}
      <div style={headerStyles}>
        <div>
          <h2 style={titleStyles}>Mentor Leaderboard</h2>
          <p style={subtitleStyles}>
            Top mentors by number of skills verified this month
          </p>
        </div>
        <div style={timeFilterStyles}>
          <button style={activeFilterButtonStyles}>This Month</button>
          <button style={filterButtonStyles}>All Time</button>
        </div>
      </div>

      {/* Leaderboard */}
      <div style={leaderboardStyles}>
        {data.map((mentor, index) => (
          <div 
            key={mentor.rank} 
            style={{
              ...leaderboardItemStyles,
              ...(mentor.name === 'You' ? yourRankStyles : {})
            }}
          >
            {/* Rank */}
            <div style={rankSectionStyles}>
              <div style={{
                ...rankBadgeStyles,
                backgroundColor: getRankColor(mentor.rank)
              }}>
                {getRankIcon(mentor.rank)}
              </div>
            </div>

            {/* Mentor Info */}
            <div style={mentorInfoStyles}>
              <div style={avatarStyles}>
                {mentor.name === 'You' ? '👑' : '👤'}
              </div>
              <div style={mentorDetailsStyles}>
                <h4 style={mentorNameStyles}>
                  {mentor.name}
                  {mentor.name === 'You' && <span style={youBadgeStyles}> (You)</span>}
                </h4>
                <div style={specialtyStyles({
                  color: getSpecialtyColor(mentor.specialty)
                })}>
                  {mentor.specialty}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={statsSectionStyles}>
              <div style={verificationCountStyles}>
                <div style={countNumberStyles}>{mentor.verifications}</div>
                <div style={countLabelStyles}>Verified</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={progressSectionStyles}>
              <div style={progressBarStyles}>
                <div 
                  style={{
                    ...progressFillStyles,
                    width: `${(mentor.verifications / data[0].verifications) * 100}%`
                  }}
                ></div>
              </div>
              <div style={progressTextStyles}>
                {Math.round((mentor.verifications / data[0].verifications) * 100)}% of #1
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Your Stats Summary */}
      <div style={yourStatsStyles}>
        <h3 style={yourStatsTitleStyles}>Your Mentor Performance</h3>
        <div style={statsGridStyles}>
          <div style={statCardStyles}>
            <div style={statIconStyles}>✅</div>
            <div style={statContentStyles}>
              <div style={statNumberStyles}>25</div>
              <div style={statLabelStyles}>Total Verifications</div>
            </div>
          </div>
          <div style={statCardStyles}>
            <div style={statIconStyles}>⭐</div>
            <div style={statContentStyles}>
              <div style={statNumberStyles}>4.9/5.0</div>
              <div style={statLabelStyles}>Average Rating</div>
            </div>
          </div>
          <div style={statCardStyles}>
            <div style={statIconStyles}>🎯</div>
            <div style={statContentStyles}>
              <div style={statNumberStyles}>18</div>
              <div style={statLabelStyles}>Learners Helped</div>
            </div>
          </div>
          <div style={statCardStyles}>
            <div style={statIconStyles}>📈</div>
            <div style={statContentStyles}>
              <div style={statNumberStyles}>#4</div>
              <div style={statLabelStyles}>Current Rank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div style={achievementsSectionStyles}>
        <h3 style={achievementsTitleStyles}>Your Achievements</h3>
        <div style={badgesGridStyles}>
          <div style={badgeCardStyles}>
            <div style={badgeIconStyles}>🏆</div>
            <div style={badgeContentStyles}>
              <h5 style={badgeTitleStyles}>Quality Mentor</h5>
              <p style={badgeDescriptionStyles}>
                Maintained 4.8+ rating for 3 consecutive months
              </p>
            </div>
          </div>
          <div style={badgeCardStyles}>
            <div style={badgeIconStyles}>🚀</div>
            <div style={badgeContentStyles}>
              <h5 style={badgeTitleStyles}>Rising Star</h5>
              <p style={badgeDescriptionStyles}>
                Top 5 mentor this month
              </p>
            </div>
          </div>
          <div style={badgeCardStyles}>
            <div style={badgeIconStyles}>💫</div>
            <div style={badgeContentStyles}>
              <h5 style={badgeTitleStyles}>Consistent Helper</h5>
              <p style={badgeDescriptionStyles}>
                20+ verifications completed
              </p>
            </div>
          </div>
          <div style={badgeCardStyles}>
            <div style={badgeIconStyles}>🌟</div>
            <div style={badgeContentStyles}>
              <h5 style={badgeTitleStyles}>Community Builder</h5>
              <p style={badgeDescriptionStyles}>
                Created 5+ learning challenges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={ctaSectionStyles}>
        <h3 style={ctaTitleStyles}>Keep Making an Impact! 🎯</h3>
        <p style={ctaTextStyles}>
          Your verifications help learners build credible portfolios and advance their careers. 
          Every skill you verify makes a difference!
        </p>
        <div style={ctaButtonsStyles}>
          <button style={primaryCtaButtonStyles}>
            View Pending Requests
          </button>
          <button style={secondaryCtaButtonStyles}>
            Create New Challenge
          </button>
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
  paddingBottom: '1.5rem',
  borderBottom: '1px solid #e2e8f0',
};

const titleStyles = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const subtitleStyles = {
  color: '#718096',
  fontSize: '1rem',
  margin: 0,
  maxWidth: '500px',
};

const timeFilterStyles = {
  display: 'flex',
  gap: '0.5rem',
  backgroundColor: '#f8f9fa',
  padding: '0.25rem',
  borderRadius: '8px',
};

const filterButtonStyles = {
  backgroundColor: 'transparent',
  color: '#718096',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const activeFilterButtonStyles = {
  ...filterButtonStyles,
  backgroundColor: '#667eea',
  color: 'white',
};

const leaderboardStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '2rem',
};

const leaderboardItemStyles = {
  display: 'grid',
  gridTemplateColumns: '80px 1fr auto 200px',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '1.5rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease',
};

const yourRankStyles = {
  backgroundColor: '#fff3cd',
  border: '2px solid #ffeaa7',
  transform: 'scale(1.02)',
};

const rankSectionStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const rankBadgeStyles = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '1.2rem',
  color: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
};

const mentorInfoStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const avatarStyles = {
  fontSize: '2rem',
  width: '60px',
  height: '60px',
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #e2e8f0',
  flexShrink: 0,
};

const mentorDetailsStyles = {
  flex: 1,
};

const mentorNameStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const youBadgeStyles = {
  color: '#d69e2e',
  fontWeight: '600',
};

const specialtyStyles = ({ color }) => ({
  color: color,
  fontSize: '0.9rem',
  fontWeight: '600',
  padding: '0.25rem 0.75rem',
  backgroundColor: `${color}15`,
  borderRadius: '20px',
  display: 'inline-block',
});

const statsSectionStyles = {
  textAlign: 'center',
};

const verificationCountStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25rem',
};

const countNumberStyles = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#667eea',
  lineHeight: '1',
};

const countLabelStyles = {
  color: '#718096',
  fontSize: '0.8rem',
  fontWeight: '600',
  textTransform: 'uppercase',
};

const progressSectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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

const progressTextStyles = {
  color: '#718096',
  fontSize: '0.8rem',
  fontWeight: '600',
  textAlign: 'center',
};

const yourStatsStyles = {
  backgroundColor: '#f0f9ff',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #bae6fd',
  marginBottom: '2rem',
};

const yourStatsTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#0369a1',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const statsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem',
};

const statCardStyles = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const statIconStyles = {
  fontSize: '2rem',
  width: '60px',
  height: '60px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const statContentStyles = {
  flex: 1,
};

const statNumberStyles = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#2d3748',
  lineHeight: '1',
  marginBottom: '0.25rem',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
};

const achievementsSectionStyles = {
  marginBottom: '2rem',
};

const achievementsTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const badgesGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
};

const badgeCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease',
};

const badgeIconStyles = {
  fontSize: '2.5rem',
  flexShrink: 0,
};

const badgeContentStyles = {
  flex: 1,
};

const badgeTitleStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const badgeDescriptionStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  lineHeight: '1.5',
  margin: 0,
};

const ctaSectionStyles = {
  backgroundColor: '#f0fff4',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #c6f6d5',
  textAlign: 'center',
};

const ctaTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#22543d',
  marginBottom: '1rem',
};

const ctaTextStyles = {
  color: '#38a169',
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const ctaButtonsStyles = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const primaryCtaButtonStyles = {
  backgroundColor: '#38a169',
  color: 'white',
  border: 'none',
  padding: '1rem 2rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1rem',
};

const secondaryCtaButtonStyles = {
  backgroundColor: 'transparent',
  color: '#38a169',
  border: '2px solid #38a169',
  padding: '1rem 2rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1rem',
};

export default LeaderboardCard;
