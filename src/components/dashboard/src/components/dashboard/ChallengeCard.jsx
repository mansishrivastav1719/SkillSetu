import React, { useState } from 'react';

const ChallengeCard = ({ challenges }) => {
  const [challengeList, setChallengeList] = useState(challenges);

  const handleJoinChallenge = (challengeId) => {
    setChallengeList(prev => 
      prev.map(challenge => 
        challenge.id === challengeId 
          ? { ...challenge, joined: true }
          : challenge
      )
    );
    const challenge = challengeList.find(c => c.id === challengeId);
    alert(`You've joined the "${challenge.title}" challenge! Good luck!`);
  };

  const handleLeaveChallenge = (challengeId) => {
    setChallengeList(prev => 
      prev.map(challenge => 
        challenge.id === challengeId 
          ? { ...challenge, joined: false }
          : challenge
      )
    );
    const challenge = challengeList.find(c => c.id === challengeId);
    alert(`You've left the "${challenge.title}" challenge.`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDaysRemaining = (dateString) => {
    const today = new Date();
    const deadline = new Date(dateString);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const allChallenges = [
    ...challengeList,
    {
      id: 3,
      title: 'JavaScript Algorithms',
      deadline: '2024-03-01',
      participants: 156,
      joined: false,
      category: 'Programming',
      difficulty: 'Intermediate',
      duration: '30 days'
    },
    {
      id: 4,
      title: 'UI/Design Fundamentals',
      deadline: '2024-02-25',
      participants: 89,
      joined: false,
      category: 'Design',
      difficulty: 'Beginner',
      duration: '21 days'
    },
    {
      id: 5,
      title: 'Full-Stack Project',
      deadline: '2024-03-10',
      participants: 203,
      joined: false,
      category: 'Development',
      difficulty: 'Advanced',
      duration: '45 days'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return '#38a169';
      case 'Intermediate': return '#dd6b20';
      case 'Advanced': return '#e53e3e';
      default: return '#718096';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming': return '💻';
      case 'Design': return '🎨';
      case 'Development': return '🚀';
      default: return '🎯';
    }
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div style={headerStyles}>
        <div>
          <h2 style={titleStyles}>Skill Challenges</h2>
          <p style={subtitleStyles}>
            Participate in gamified challenges to level up your skills and earn recognition
          </p>
        </div>
        <div style={statsStyles}>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>
              {challengeList.filter(c => c.joined).length}
            </div>
            <div style={statLabelStyles}>Active</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>
              {allChallenges.length}
            </div>
            <div style={statLabelStyles}>Available</div>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div style={sectionStyles}>
        <h3 style={sectionTitleStyles}>Your Active Challenges</h3>
        {challengeList.filter(c => c.joined).length === 0 ? (
          <div style={emptyStateStyles}>
            <div style={emptyIconStyles}>🎮</div>
            <h4 style={emptyTitleStyles}>No active challenges</h4>
            <p style={emptyTextStyles}>
              Join a challenge below to start leveling up your skills!
            </p>
          </div>
        ) : (
          <div style={challengesGridStyles}>
            {challengeList
              .filter(challenge => challenge.joined)
              .map(challenge => (
                <div key={challenge.id} style={activeChallengeCardStyles}>
                  <div style={challengeHeaderStyles}>
                    <div style={categoryIconStyles}>
                      {getCategoryIcon(challenge.category)}
                    </div>
                    <div style={challengeInfoStyles}>
                      <h4 style={challengeTitleStyles}>{challenge.title}</h4>
                      <div style={challengeMetaStyles}>
                        <span style={metaItemStyles}>
                          ⏱️ {challenge.duration || '14 days'}
                        </span>
                        <span style={metaItemStyles}>
                          👥 {challenge.participants} participants
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={progressSectionStyles}>
                    <div style={progressHeaderStyles}>
                      <span style={progressLabelStyles}>Your Progress</span>
                      <span style={progressPercentageStyles}>25%</span>
                    </div>
                    <div style={progressBarStyles}>
                      <div style={progressFillStyles}></div>
                    </div>
                  </div>

                  <div style={deadlineStyles}>
                    <span style={deadlineLabelStyles}>Deadline:</span>
                    <span style={deadlineDateStyles}>
                      {formatDate(challenge.deadline)} 
                      ({getDaysRemaining(challenge.deadline)} days left)
                    </span>
                  </div>

                  <div style={actionButtonsStyles}>
                    <button style={continueButtonStyles}>
                      Continue Challenge
                    </button>
                    <button 
                      onClick={() => handleLeaveChallenge(challenge.id)}
                      style={leaveButtonStyles}
                    >
                      Leave Challenge
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Available Challenges */}
      <div style={sectionStyles}>
        <h3 style={sectionTitleStyles}>Available Challenges</h3>
        <div style={challengesGridStyles}>
          {allChallenges
            .filter(challenge => !challenge.joined)
            .map(challenge => (
              <div key={challenge.id} style={challengeCardStyles}>
                <div style={challengeHeaderStyles}>
                  <div style={categoryIconStyles}>
                    {getCategoryIcon(challenge.category)}
                  </div>
                  <div style={challengeInfoStyles}>
                    <h4 style={challengeTitleStyles}>{challenge.title}</h4>
                    <div style={difficultyBadgeStyles({
                      color: getDifficultyColor(challenge.difficulty)
                    })}>
                      {challenge.difficulty}
                    </div>
                  </div>
                </div>

                <p style={challengeDescriptionStyles}>
                  {challenge.description || `Improve your ${challenge.category.toLowerCase()} skills through hands-on projects and peer learning.`}
                </p>

                <div style={challengeDetailsStyles}>
                  <div style={detailItemStyles}>
                    <span style={detailIconStyles}>⏱️</span>
                    <span style={detailTextStyles}>{challenge.duration}</span>
                  </div>
                  <div style={detailItemStyles}>
                    <span style={detailIconStyles}>👥</span>
                    <span style={detailTextStyles}>{challenge.participants} participants</span>
                  </div>
                  <div style={detailItemStyles}>
                    <span style={detailIconStyles}>📅</span>
                    <span style={detailTextStyles}>
                      Ends {formatDate(challenge.deadline)}
                    </span>
                  </div>
                </div>

                <div style={rewardsSectionStyles}>
                  <h5 style={rewardsTitleStyles}>🎁 Rewards:</h5>
                  <div style={rewardsListStyles}>
                    <span style={rewardTagStyles}>Skill Badge</span>
                    <span style={rewardTagStyles}>Certificate</span>
                    <span style={rewardTagStyles}>Points</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleJoinChallenge(challenge.id)}
                  style={joinButtonStyles}
                >
                  Join Challenge
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Challenge Benefits */}
      <div style={benefitsSectionStyles}>
        <h3 style={benefitsTitleStyles}>Why Join Challenges?</h3>
        <div style={benefitsGridStyles}>
          <div style={benefitCardStyles}>
            <div style={benefitIconStyles}>🏆</div>
            <h4 style={benefitTitleStyles}>Earn Recognition</h4>
            <p style={benefitTextStyles}>
              Get verified badges and certificates that showcase your achievements
            </p>
          </div>
          <div style={benefitCardStyles}>
            <div style={benefitIconStyles}>📈</div>
            <h4 style={benefitTitleStyles}>Skill Growth</h4>
            <p style={benefitTextStyles}>
              Learn through practical projects and real-world scenarios
            </p>
          </div>
          <div style={benefitCardStyles}>
            <div style={benefitIconStyles}>👥</div>
            <h4 style={benefitTitleStyles}>Community</h4>
            <p style={benefitTextStyles}>
              Connect with peers and mentors in your skill domain
            </p>
          </div>
          <div style={benefitCardStyles}>
            <div style={benefitIconStyles}>💼</div>
            <h4 style={benefitTitleStyles}>Career Boost</h4>
            <p style={benefitTextStyles}>
              Stand out to recruiters with proven project experience
            </p>
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

const statsStyles = {
  display: 'flex',
  gap: '2rem',
};

const statItemStyles = {
  textAlign: 'center',
};

const statNumberStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#667eea',
  lineHeight: '1',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
  marginTop: '0.25rem',
};

const sectionStyles = {
  marginBottom: '3rem',
};

const sectionTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '1.5rem',
};

const emptyStateStyles = {
  textAlign: 'center',
  padding: '3rem 2rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
};

const emptyIconStyles = {
  fontSize: '3rem',
  marginBottom: '1rem',
};

const emptyTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#4a5568',
  marginBottom: '0.5rem',
};

const emptyTextStyles = {
  color: '#718096',
  lineHeight: '1.6',
};

const challengesGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '1.5rem',
};

const activeChallengeCardStyles = {
  backgroundColor: '#f0fff4',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '2px solid #c6f6d5',
};

const challengeCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease',
};

const challengeHeaderStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  marginBottom: '1rem',
};

const categoryIconStyles = {
  fontSize: '2rem',
  width: '50px',
  height: '50px',
  backgroundColor: 'white',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  flexShrink: 0,
};

const challengeInfoStyles = {
  flex: 1,
};

const challengeTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const challengeMetaStyles = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const metaItemStyles = {
  fontSize: '0.85rem',
  color: '#718096',
};

const difficultyBadgeStyles = ({ color }) => ({
  backgroundColor: color,
  color: 'white',
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '600',
  display: 'inline-block',
});

const challengeDescriptionStyles = {
  color: '#4a5568',
  lineHeight: '1.6',
  marginBottom: '1rem',
  fontSize: '0.95rem',
};

const challengeDetailsStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1rem',
};

const detailItemStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.9rem',
  color: '#4a5568',
};

const detailIconStyles = {
  fontSize: '1rem',
  width: '20px',
};

const detailTextStyles = {
  fontSize: '0.9rem',
};

const progressSectionStyles = {
  marginBottom: '1rem',
};

const progressHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
};

const progressLabelStyles = {
  fontWeight: '600',
  color: '#4a5568',
  fontSize: '0.9rem',
};

const progressPercentageStyles = {
  fontWeight: '700',
  color: '#38a169',
  fontSize: '0.9rem',
};

const progressBarStyles = {
  width: '100%',
  height: '6px',
  backgroundColor: '#e2e8f0',
  borderRadius: '3px',
  overflow: 'hidden',
};

const progressFillStyles = {
  width: '25%',
  height: '100%',
  backgroundColor: '#38a169',
  borderRadius: '3px',
  transition: 'width 0.3s ease',
};

const deadlineStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  padding: '0.75rem',
  backgroundColor: 'white',
  borderRadius: '6px',
  border: '1px solid #e2e8f0',
};

const deadlineLabelStyles = {
  fontWeight: '600',
  color: '#4a5568',
  fontSize: '0.9rem',
};

const deadlineDateStyles = {
  color: '#e53e3e',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const rewardsSectionStyles = {
  marginBottom: '1rem',
};

const rewardsTitleStyles = {
  fontSize: '0.9rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const rewardsListStyles = {
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
};

const rewardTagStyles = {
  backgroundColor: '#fff3cd',
  color: '#856404',
  padding: '0.25rem 0.5rem',
  borderRadius: '12px',
  fontSize: '0.75rem',
  fontWeight: '600',
};

const actionButtonsStyles = {
  display: 'flex',
  gap: '0.75rem',
};

const continueButtonStyles = {
  backgroundColor: '#38a169',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  flex: 2,
};

const leaveButtonStyles = {
  backgroundColor: 'transparent',
  color: '#e53e3e',
  border: '1px solid #e53e3e',
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  flex: 1,
};

const joinButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  width: '100%',
  transition: 'background-color 0.3s ease',
};

const benefitsSectionStyles = {
  padding: '2rem',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #bae6fd',
};

const benefitsTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#0369a1',
  marginBottom: '2rem',
  textAlign: 'center',
};

const benefitsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
};

const benefitCardStyles = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const benefitIconStyles = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
};

const benefitTitleStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '0.5rem',
};

const benefitTextStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  lineHeight: '1.5',
};

export default ChallengeCard;
