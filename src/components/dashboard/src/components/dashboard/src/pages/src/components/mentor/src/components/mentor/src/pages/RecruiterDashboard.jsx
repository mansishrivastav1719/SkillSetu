import React, { useState } from 'react';
import CandidateCard from '../components/recruiter/CandidateCard';
import SearchBar from '../components/recruiter/SearchBar';

const RecruiterDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState('all');

  // Mock data for demonstration
  const candidates = [
    {
      id: 1,
      name: 'Alice Johnson',
      title: 'Frontend Developer',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML'],
      verifiedCount: 8,
      experience: '3 years',
      location: 'Remote',
      portfolio: 'https://aliceportfolio.com',
      lastActive: '2 days ago',
      matchScore: 95
    },
    {
      id: 2,
      name: 'Bob Smith',
      title: 'Full-Stack Developer',
      skills: ['Node.js', 'React', 'Python', 'MongoDB', 'AWS'],
      verifiedCount: 12,
      experience: '5 years',
      location: 'New York, NY',
      portfolio: 'https://bobsmith.dev',
      lastActive: '1 week ago',
      matchScore: 88
    },
    {
      id: 3,
      name: 'Carol Davis',
      title: 'UI/UX Designer',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'HTML/CSS'],
      verifiedCount: 6,
      experience: '2 years',
      location: 'San Francisco, CA',
      portfolio: 'https://caroldesigns.com',
      lastActive: '3 days ago',
      matchScore: 92
    },
    {
      id: 4,
      name: 'David Wilson',
      title: 'Data Scientist',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Data Analysis'],
      verifiedCount: 10,
      experience: '4 years',
      location: 'Remote',
      portfolio: 'https://davidwilson.ai',
      lastActive: '1 day ago',
      matchScore: 85
    },
    {
      id: 5,
      name: 'Eva Martinez',
      title: 'Mobile Developer',
      skills: ['React Native', 'iOS', 'Android', 'JavaScript', 'Firebase'],
      verifiedCount: 7,
      experience: '3 years',
      location: 'Austin, TX',
      portfolio: 'https://evamartinez.app',
      lastActive: 'Just now',
      matchScore: 90
    }
  ];

  const skillsList = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java',
    'CSS', 'HTML', 'MongoDB', 'SQL', 'AWS', 'Docker', 'Figma',
    'UI/UX', 'Machine Learning', 'Data Analysis', 'React Native'
  ];

  const experienceLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (2-5 years)' },
    { value: 'senior', label: 'Senior Level (5+ years)' }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => 
                           skill.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.every(skill => 
                           candidate.skills.includes(skill)
                         );
    
    const matchesExperience = experienceLevel === 'all' || 
                             (experienceLevel === 'entry' && candidate.experience.includes('0-2')) ||
                             (experienceLevel === 'mid' && candidate.experience.includes('2-5')) ||
                             (experienceLevel === 'senior' && candidate.experience.includes('5+'));
    
    return matchesSearch && matchesSkills && matchesExperience;
  });

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSendInterviewInvite = (candidateId) => {
    const candidate = candidates.find(c => c.id === candidateId);
    alert(`Interview invite sent to ${candidate.name}! They will be notified of your interest.`);
  };

  const handleConnect = (candidateId) => {
    const candidate = candidates.find(c => c.id === candidateId);
    alert(`Connection request sent to ${candidate.name}!`);
  };

  return (
    <div style={dashboardStyles}>
      {/* Top Navigation Bar */}
      <nav style={topNavStyles}>
        <div style={navContainerStyles}>
          <div style={navLeftStyles}>
            <span style={navTitleStyles}>Recruiter Dashboard</span>
          </div>
          <div style={navRightStyles}>
            <button style={notificationButtonStyles}>🔔</button>
            <div style={profileStyles}>
              <span style={profileIconStyles}>💼</span>
              <span style={profileNameStyles}>Recruiter View</span>
            </div>
            <button style={logoutButtonStyles}>Logout</button>
          </div>
        </div>
      </nav>

      <div style={layoutStyles}>
        {/* Sidebar Filters */}
        <aside style={sidebarStyles}>
          <div style={sidebarHeaderStyles}>
            <h3 style={sidebarTitleStyles}>Filters</h3>
          </div>

          {/* Search */}
          <div style={filterSectionStyles}>
            <h4 style={filterTitleStyles}>Search</h4>
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {/* Experience Level */}
          <div style={filterSectionStyles}>
            <h4 style={filterTitleStyles}>Experience Level</h4>
            <div style={radioGroupStyles}>
              {experienceLevels.map(level => (
                <label key={level.value} style={radioLabelStyles}>
                  <input
                    type="radio"
                    value={level.value}
                    checked={experienceLevel === level.value}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    style={radioInputStyles}
                  />
                  {level.label}
                </label>
              ))}
            </div>
          </div>

          {/* Skills Filter */}
          <div style={filterSectionStyles}>
            <div style={skillsHeaderStyles}>
              <h4 style={filterTitleStyles}>Skills</h4>
              {selectedSkills.length > 0 && (
                <button 
                  onClick={() => setSelectedSkills([])}
                  style={clearButtonStyles}
                >
                  Clear
                </button>
              )}
            </div>
            <div style={skillsGridStyles}>
              {skillsList.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  style={{
                    ...skillButtonStyles,
                    ...(selectedSkills.includes(skill) ? selectedSkillButtonStyles : {})
                  }}
                >
                  {skill}
                  {selectedSkills.includes(skill) && ' ✓'}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div style={statsSectionStyles}>
            <h4 style={statsTitleStyles}>Quick Stats</h4>
            <div style={statsListStyles}>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>{candidates.length}</span>
                <span style={statLabelStyles}>Total Candidates</span>
              </div>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>{filteredCandidates.length}</span>
                <span style={statLabelStyles}>Filtered</span>
              </div>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>23</span>
                <span style={statLabelStyles}>Connected</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={mainStyles}>
          <div style={contentHeaderStyles}>
            <div>
              <h2 style={contentTitleStyles}>Find Verified Talent</h2>
              <p style={contentSubtitleStyles}>
                Browse candidates with skills verified by industry mentors
              </p>
            </div>
            <div style={resultsInfoStyles}>
              Showing {filteredCandidates.length} of {candidates.length} candidates
            </div>
          </div>

          {/* Candidates Grid */}
          {filteredCandidates.length === 0 ? (
            <div style={emptyStateStyles}>
              <div style={emptyIconStyles}>🔍</div>
              <h3 style={emptyTitleStyles}>No candidates found</h3>
              <p style={emptyTextStyles}>
                Try adjusting your filters to see more candidates.
              </p>
            </div>
          ) : (
            <div style={candidatesGridStyles}>
              {filteredCandidates.map(candidate => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onInterviewInvite={handleSendInterviewInvite}
                  onConnect={handleConnect}
                />
              ))}
            </div>
          )}

          {/* Recruiter Benefits */}
          <div style={benefitsSectionStyles}>
            <h3 style={benefitsTitleStyles}>Why SkillSetu for Recruiting?</h3>
            <div style={benefitsGridStyles}>
              <div style={benefitCardStyles}>
                <div style={benefitIconStyles}>✅</div>
                <h4 style={benefitTitleStyles}>Verified Skills</h4>
                <p style={benefitTextStyles}>
                  Every skill is validated by industry experts, saving you screening time
                </p>
              </div>
              <div style={benefitCardStyles}>
                <div style={benefitIconStyles}>📊</div>
                <h4 style={benefitTitleStyles}>Portfolio Proof</h4>
                <p style={benefitTextStyles}>
                  View actual project work and code samples for each candidate
                </p>
              </div>
              <div style={benefitCardStyles}>
                <div style={benefitIconStyles}>🎯</div>
                <h4 style={benefitTitleStyles}>Precision Matching</h4>
                <p style={benefitTextStyles}>
                  Find candidates with exact skill combinations you need
                </p>
              </div>
              <div style={benefitCardStyles}>
                <div style={benefitIconStyles}>⚡</div>
                <h4 style={benefitTitleStyles}>Fast Hiring</h4>
                <p style={benefitTextStyles}>
                  Reduce time-to-hire with pre-verified, ready-to-interview talent
                </p>
              </div>
            </div>
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
  width: '320px',
  backgroundColor: 'white',
  boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
  padding: '2rem 1.5rem',
  overflowY: 'auto',
};

const sidebarHeaderStyles = {
  marginBottom: '2rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid #e2e8f0',
};

const sidebarTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: 0,
};

const filterSectionStyles = {
  marginBottom: '2rem',
};

const filterTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#4a5568',
  marginBottom: '1rem',
};

const radioGroupStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const radioLabelStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  fontSize: '0.9rem',
  color: '#4a5568',
};

const radioInputStyles = {
  margin: 0,
};

const skillsHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
};

const clearButtonStyles = {
  backgroundColor: 'transparent',
  color: '#667eea',
  border: 'none',
  fontSize: '0.8rem',
  fontWeight: '600',
  cursor: 'pointer',
  padding: '0.25rem 0.5rem',
};

const skillsGridStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  maxHeight: '200px',
  overflowY: 'auto',
};

const skillButtonStyles = {
  backgroundColor: '#f8f9fa',
  color: '#4a5568',
  border: '1px solid #e2e8f0',
  padding: '0.5rem 0.75rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.85rem',
  textAlign: 'left',
  transition: 'all 0.2s ease',
};

const selectedSkillButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  borderColor: '#667eea',
};

const statsSectionStyles = {
  padding: '1.5rem',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #bae6fd',
};

const statsTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#0369a1',
  marginBottom: '1rem',
  textAlign: 'center',
};

const statsListStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const statItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.75rem',
  backgroundColor: 'white',
  borderRadius: '6px',
};

const statNumberStyles = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: '#667eea',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.85rem',
  fontWeight: '600',
};

const mainStyles = {
  flex: 1,
  padding: '2rem',
  overflowY: 'auto',
};

const contentHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '2rem',
};

const contentTitleStyles = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const contentSubtitleStyles = {
  color: '#718096',
  fontSize: '1rem',
  margin: 0,
};

const resultsInfoStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
  padding: '0.5rem 1rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '20px',
};

const emptyStateStyles = {
  textAlign: 'center',
  padding: '4rem 2rem',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const emptyIconStyles = {
  fontSize: '4rem',
  marginBottom: '1.5rem',
};

const emptyTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#4a5568',
  marginBottom: '1rem',
};

const emptyTextStyles = {
  color: '#718096',
  lineHeight: '1.6',
  maxWidth: '400px',
  margin: '0 auto',
};

const candidatesGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '1.5rem',
  marginBottom: '3rem',
};

const benefitsSectionStyles = {
  padding: '2rem',
  backgroundColor: '#f0fff4',
  borderRadius: '8px',
  border: '1px solid #c6f6d5',
};

const benefitsTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#22543d',
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

export default RecruiterDashboard;
