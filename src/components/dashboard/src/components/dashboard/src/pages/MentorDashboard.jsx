import React, { useState } from 'react';
import VerifyRequestCard from '../components/mentor/VerifyRequestCard';
import LeaderboardCard from '../components/mentor/LeaderboardCard';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('verification');

  // Mock data for demonstration
  const verificationRequests = [
    {
      id: 1,
      learnerName: 'Alice Johnson',
      skill: 'React Development',
      level: 'Intermediate',
      submittedDate: '2024-01-15',
      proof: 'https://github.com/alice/react-projects',
      description: 'Built a complete e-commerce frontend with React hooks and context'
    },
    {
      id: 2,
      learnerName: 'Bob Smith',
      skill: 'JavaScript Algorithms',
      level: 'Advanced',
      submittedDate: '2024-01-14',
      proof: 'https://codepen.io/bob/collections',
      description: 'Solved 50+ LeetCode problems with optimal solutions'
    },
    {
      id: 3,
      learnerName: 'Carol Davis',
      skill: 'UI/UX Design',
      level: 'Beginner',
      submittedDate: '2024-01-13',
      proof: 'https://dribbble.com/carol/shots',
      description: 'Designed mobile app interfaces for fitness tracking'
    }
  ];

  const leaderboardData = [
    { rank: 1, name: 'Dr. Sarah Chen', verifications: 47, specialty: 'Full-Stack' },
    { rank: 2, name: 'Prof. Mike Ross', verifications: 42, specialty: 'Frontend' },
    { rank: 3, name: 'Alex Kumar', verifications: 38, specialty: 'Data Science' },
    { rank: 4, name: 'You', verifications: 25, specialty: 'Multiple' },
    { rank: 5, name: 'Lisa Wang', verifications: 22, specialty: 'UI/UX' }
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'Dr. Sarah Chen',
      time: '2 hours ago',
      content: 'Just posted a new advanced React patterns challenge! Perfect for developers looking to level up their component architecture skills. #React #Advanced',
      type: 'challenge'
    },
    {
      id: 2,
      author: 'TechCorp Recruiting',
      time: '5 hours ago',
      content: 'Looking for skilled React developers with verified portfolios. Remote positions available with competitive packages. Reach out if interested!',
      type: 'opportunity'
    },
    {
      id: 3,
      author: 'Prof. Mike Ross',
      time: '1 day ago',
      content: 'Quick tip: When verifying JavaScript skills, always check for understanding of closures and async/await patterns. These are fundamental for modern web development.',
      type: 'guidance'
    }
  ];

  const tabs = [
    { id: 'verification', label: 'Verification Requests', icon: '✅' },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
    { id: 'community', label: 'Community', icon: '👥' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'verification':
        return <VerifyRequestCard requests={verificationRequests} />;
      case 'leaderboard':
        return <LeaderboardCard data={leaderboardData} />;
      case 'community':
        return (
          <div style={communityStyles}>
            <div style={communityHeaderStyles}>
              <h3 style={sectionTitleStyles}>Mentor Community</h3>
              <button style={newPostButtonStyles}>+ New Post</button>
            </div>
            
            <div style={postsContainerStyles}>
              {communityPosts.map(post => (
                <div key={post.id} style={postCardStyles}>
                  <div style={postHeaderStyles}>
                    <div style={authorSectionStyles}>
                      <span style={authorAvatarStyles}>👤</span>
                      <div>
                        <div style={authorNameStyles}>{post.author}</div>
                        <div style={postTimeStyles}>{post.time}</div>
                      </div>
                    </div>
                    <div style={postTypeStyles(post.type)}>
                      {post.type === 'challenge' && '🎮 Challenge'}
                      {post.type === 'opportunity' && '💼 Opportunity'}
                      {post.type === 'guidance' && '💡 Guidance'}
                    </div>
                  </div>
                  <p style={postContentStyles}>{post.content}</p>
                  <div style={postActionsStyles}>
                    <button style={actionButtonStyles}>👍 Like</button>
                    <button style={actionButtonStyles}>💬 Comment</button>
                    <button style={actionButtonStyles}>↗️ Share</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div style={statsSectionStyles}>
              <h4 style={statsTitleStyles}>Your Mentor Impact</h4>
              <div style={statsGridStyles}>
                <div style={statCardStyles}>
                  <div style={statNumberStyles}>25</div>
                  <div style={statLabelStyles}>Skills Verified</div>
                </div>
                <div style={statCardStyles}>
                  <div style={statNumberStyles}>18</div>
                  <div style={statLabelStyles}>Learners Helped</div>
                </div>
                <div style={statCardStyles}>
                  <div style={statNumberStyles}>4.9</div>
                  <div style={statLabelStyles}>Avg Rating</div>
                </div>
                <div style={statCardStyles}>
                  <div style={statNumberStyles}>12</div>
                  <div style={statLabelStyles}>Challenges Created</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <VerifyRequestCard requests={verificationRequests} />;
    }
  };

  return (
    <div style={dashboardStyles}>
      {/* Top Navigation Bar */}
      <nav style={topNavStyles}>
        <div style={navContainerStyles}>
          <div style={navLeftStyles}>
            <span style={navTitleStyles}>Mentor Dashboard</span>
          </div>
          <div style={navRightStyles}>
            <button style={notificationButtonStyles}>🔔</button>
            <div style={profileStyles}>
              <span style={profileIconStyles}>👨‍🏫</span>
              <span style={profileNameStyles}>Mentor View</span>
            </div>
            <button style={logoutButtonStyles}>Logout</button>
          </div>
        </div>
      </nav>

      <div style={layoutStyles}>
        {/* Sidebar */}
        <aside style={sidebarStyles}>
          <div style={sidebarHeaderStyles}>
            <div style={mentorBadgeStyles}>
              <span style={badgeIconStyles}>👑</span>
              <div>
                <div style={badgeTitleStyles}>Verified Mentor</div>
                <div style={badgeSubtitleStyles}>Expert Level</div>
              </div>
            </div>
          </div>
          <nav style={sidebarNavStyles}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...sidebarButtonStyles,
                  ...(activeTab === tab.id ? activeButtonStyles : {})
                }}
              >
                <span style={buttonIconStyles}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={mainStyles}>
          <div style={contentStyles}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

// Styles
const dashboardStyles = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
};

const topNavStyles = {
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  padding: '1rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const navContainerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navLeftStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const navTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#2d3748',
};

const navRightStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

const notificationButtonStyles = {
  background: 'none',
  border: 'none',
  fontSize: '1.2rem',
  cursor: 'pointer',
  padding: '0.5rem',
};

const profileStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const profileIconStyles = {
  fontSize: '1.5rem',
};

const profileNameStyles = {
  fontWeight: '600',
  color: '#4a5568',
};

const logoutButtonStyles = {
  backgroundColor: '#e53e3e',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
};

const layoutStyles = {
  display: 'flex',
  minHeight: 'calc(100vh - 80px)',
};

const sidebarStyles = {
  width: '300px',
  backgroundColor: 'white',
  boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
  padding: '2rem 0',
};

const sidebarHeaderStyles = {
  padding: '0 1.5rem 1.5rem',
  borderBottom: '1px solid #e2e8f0',
  marginBottom: '1rem',
};

const mentorBadgeStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: '#fff3cd',
  borderRadius: '8px',
  border: '1px solid #ffeaa7',
};

const badgeIconStyles = {
  fontSize: '2rem',
};

const badgeTitleStyles = {
  fontWeight: '700',
  color: '#856404',
  fontSize: '1rem',
};

const badgeSubtitleStyles = {
  color: '#d69e2e',
  fontSize: '0.85rem',
  fontWeight: '600',
};

const sidebarNavStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
};

const sidebarButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '1rem 1.5rem',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#4a5568',
  transition: 'all 0.3s ease',
};

const activeButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  fontWeight: '600',
};

const buttonIconStyles = {
  fontSize: '1.2rem',
};

const mainStyles = {
  flex: 1,
  padding: '2rem',
};

const contentStyles = {
  maxWidth: '100%',
};

const communityStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const communityHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
};

const sectionTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: 0,
};

const newPostButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.95rem',
};

const postsContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const postCardStyles = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const postHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1rem',
};

const authorSectionStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const authorAvatarStyles = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px',
  backgroundColor: '#f7fafc',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #e2e8f0',
};

const authorNameStyles = {
  fontWeight: '600',
  color: '#2d3748',
  fontSize: '1rem',
};

const postTimeStyles = {
  color: '#718096',
  fontSize: '0.85rem',
};

const postTypeStyles = (type) => ({
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '600',
  backgroundColor: 
    type === 'challenge' ? '#c6f6d5' :
    type === 'opportunity' ? '#fed7d7' :
    '#bee3f8',
  color: 
    type === 'challenge' ? '#22543d' :
    type === 'opportunity' ? '#742a2a' :
    '#1a365d',
});

const postContentStyles = {
  color: '#4a5568',
  lineHeight: '1.6',
  marginBottom: '1rem',
  fontSize: '1rem',
};

const postActionsStyles = {
  display: 'flex',
  gap: '1rem',
};

const actionButtonStyles = {
  backgroundColor: 'transparent',
  color: '#718096',
  border: '1px solid #e2e8f0',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: '600',
};

const statsSectionStyles = {
  backgroundColor: '#f0f9ff',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #bae6fd',
};

const statsTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#0369a1',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const statsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1rem',
};

const statCardStyles = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const statNumberStyles = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#667eea',
  lineHeight: '1',
  marginBottom: '0.5rem',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
};

export default MentorDashboard;
