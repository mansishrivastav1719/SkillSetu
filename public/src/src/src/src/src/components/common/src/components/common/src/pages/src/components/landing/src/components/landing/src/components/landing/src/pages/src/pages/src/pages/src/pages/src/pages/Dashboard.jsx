import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/dashboard/ProfileCard';
import SkillCard from '../components/dashboard/SkillCard';
import PortfolioItem from '../components/dashboard/PortfolioItem';
import ChallengeCard from '../components/dashboard/ChallengeCard';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const userData = {
    name: 'John Doe',
    isVerified: true,
    progress: 65,
    stats: {
      skillsVerified: 8,
      projects: 3,
      challenges: 5,
      connections: 12
    },
    skills: [
      { id: 1, name: 'React', level: 'Advanced', isVerified: true },
      { id: 2, name: 'JavaScript', level: 'Advanced', isVerified: true },
      { id: 3, name: 'Node.js', level: 'Intermediate', isVerified: false },
      { id: 4, name: 'UI/UX Design', level: 'Beginner', isVerified: false }
    ],
    portfolio: [
      { id: 1, title: 'E-commerce Website', description: 'Full-stack e-commerce platform', link: 'https://github.com/johndoe/ecommerce' },
      { id: 2, title: 'Task Management App', description: 'React-based task manager', link: 'https://github.com/johndoe/taskapp' }
    ],
    challenges: [
      { id: 1, title: '30-Day Coding Challenge', deadline: '2024-02-15', participants: 245, joined: true },
      { id: 2, title: 'UI Design Sprint', deadline: '2024-02-20', participants: 89, joined: false }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Profile Overview', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'portfolio', label: 'Portfolio', icon: '📁' },
    { id: 'challenges', label: 'Challenges', icon: '🎮' },
    { id: 'community', label: 'Community', icon: '👥' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProfileCard userData={userData} />;
      case 'skills':
        return <SkillCard skills={userData.skills} />;
      case 'portfolio':
        return <PortfolioItem portfolio={userData.portfolio} />;
      case 'challenges':
        return <ChallengeCard challenges={userData.challenges} />;
      case 'community':
        return (
          <div style={communityStyles}>
            <h3 style={sectionTitleStyles}>Community Feed</h3>
            <div style={postCardStyles}>
              <div style={postHeaderStyles}>
                <span style={postAuthorStyles}>Mentor Sarah</span>
                <span style={postTimeStyles}>2 hours ago</span>
              </div>
              <p style={postContentStyles}>
                Just posted a new React challenge! Build a weather app using hooks and context API. 
                Great for beginners looking to practice state management. #React #Challenge
              </p>
            </div>
            <div style={postCardStyles}>
              <div style={postHeaderStyles}>
                <span style={postAuthorStyles}>Alex Kumar</span>
                <span style={postTimeStyles}>5 hours ago</span>
              </div>
              <p style={postContentStyles}>
                Looking for a study partner for the JavaScript algorithms challenge. 
                Anyone interested in pair programming? #JavaScript #StudyGroup
              </p>
            </div>
          </div>
        );
      default:
        return <ProfileCard userData={userData} />;
    }
  };

  return (
    <div style={dashboardStyles}>
      {/* Top Navigation Bar */}
      <nav style={topNavStyles}>
        <div style={navContainerStyles}>
          <div style={navLeftStyles}>
            <span style={navTitleStyles}>Dashboard</span>
          </div>
          <div style={navRightStyles}>
            <button style={notificationButtonStyles}>🔔</button>
            <div style={profileStyles}>
              <span style={profileIconStyles}>👤</span>
              <span style={profileNameStyles}>{userData.name}</span>
            </div>
            <button style={logoutButtonStyles}>Logout</button>
          </div>
        </div>
      </nav>

      <div style={layoutStyles}>
        {/* Sidebar */}
        <aside style={sidebarStyles}>
          <div style={sidebarHeaderStyles}>
            <h3 style={sidebarTitleStyles}>Navigation</h3>
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
  width: '280px',
  backgroundColor: 'white',
  boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
  padding: '2rem 0',
};

const sidebarHeaderStyles = {
  padding: '0 1.5rem 1.5rem',
  borderBottom: '1px solid #e2e8f0',
};

const sidebarTitleStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2d3748',
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
  gap: '1.5rem',
};

const sectionTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#2d3748',
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
  alignItems: 'center',
  marginBottom: '1rem',
};

const postAuthorStyles = {
  fontWeight: '600',
  color: '#2d3748',
};

const postTimeStyles = {
  color: '#718096',
  fontSize: '0.9rem',
};

const postContentStyles = {
  color: '#4a5568',
  lineHeight: '1.6',
};

export default Dashboard;
