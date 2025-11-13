import React, { useState } from 'react';

const SkillCard = ({ skills }) => {
  const [newSkill, setNewSkill] = useState('');
  const [skillList, setSkillList] = useState(skills);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const newSkillObj = {
        id: skillList.length + 1,
        name: newSkill.trim(),
        level: 'Beginner',
        isVerified: false
      };
      setSkillList([...skillList, newSkillObj]);
      setNewSkill('');
      alert(`Skill "${newSkill}" added! Now request verification.`);
    }
  };

  const handleRequestVerification = (skillId) => {
    const skill = skillList.find(s => s.id === skillId);
    alert(`Verification requested for "${skill.name}". Mentors will review your skill.`);
    // In a real app, this would send a request to the backend
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#e53e3e';
      case 'Intermediate': return '#dd6b20';
      case 'Advanced': return '#38a169';
      default: return '#718096';
    }
  };

  return (
    <div style={containerStyles}>
      {/* Add New Skill Section */}
      <div style={addSkillSectionStyles}>
        <h3 style={sectionTitleStyles}>Add New Skill</h3>
        <div style={inputGroupStyles}>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill (e.g., React, Python, UI Design)"
            style={inputStyles}
          />
          <button onClick={handleAddSkill} style={addButtonStyles}>
            Add Skill
          </button>
        </div>
      </div>

      {/* Skills List */}
      <div style={skillsSectionStyles}>
        <h3 style={sectionTitleStyles}>Your Skills</h3>
        <p style={subtitleStyles}>
          {skillList.filter(skill => skill.isVerified).length} of {skillList.length} skills verified
        </p>

        {skillList.length === 0 ? (
          <div style={emptyStateStyles}>
            <div style={emptyIconStyles}>🎯</div>
            <h4 style={emptyTitleStyles}>No skills added yet</h4>
            <p style={emptyTextStyles}>
              Start by adding your first skill above. Once added, you can request verification from mentors.
            </p>
          </div>
        ) : (
          <div style={skillsGridStyles}>
            {skillList.map(skill => (
              <div key={skill.id} style={skillCardStyles}>
                <div style={skillHeaderStyles}>
                  <h4 style={skillNameStyles}>{skill.name}</h4>
                  <div style={{
                    ...levelBadgeStyles,
                    backgroundColor: getLevelColor(skill.level)
                  }}>
                    {skill.level}
                  </div>
                </div>
                
                <div style={skillStatusStyles}>
                  {skill.isVerified ? (
                    <div style={verifiedStyles}>
                      <span style={verifiedIconStyles}>✅</span>
                      Verified
                    </div>
                  ) : (
                    <div style={notVerifiedStyles}>
                      <span style={notVerifiedIconStyles}>⏳</span>
                      Pending Verification
                    </div>
                  )}
                </div>

                <div style={actionSectionStyles}>
                  {!skill.isVerified && (
                    <button 
                      onClick={() => handleRequestVerification(skill.id)}
                      style={verifyButtonStyles}
                    >
                      Request Verification
                    </button>
                  )}
                  <button style={viewButtonStyles}>
                    View Details
                  </button>
                </div>

                {!skill.isVerified && (
                  <div style={tipStyles}>
                    <small>💡 Tip: Add project links to increase verification chances</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Verification Progress */}
      <div style={progressSectionStyles}>
        <h4 style={progressTitleStyles}>Verification Progress</h4>
        <div style={progressStatsStyles}>
          <div style={progressStatStyles}>
            <div style={progressNumberStyles}>
              {skillList.filter(s => s.isVerified).length}
            </div>
            <div style={progressLabelStyles}>Verified</div>
          </div>
          <div style={progressStatStyles}>
            <div style={progressNumberStyles}>
              {skillList.filter(s => !s.isVerified).length}
            </div>
            <div style={progressLabelStyles}>Pending</div>
          </div>
          <div style={progressStatStyles}>
            <div style={progressNumberStyles}>
              {skillList.length}
            </div>
            <div style={progressLabelStyles}>Total</div>
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

const addSkillSectionStyles = {
  marginBottom: '2rem',
  paddingBottom: '2rem',
  borderBottom: '1px solid #e2e8f0',
};

const sectionTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '1rem',
};

const inputGroupStyles = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
};

const inputStyles = {
  flex: 1,
  padding: '1rem',
  border: '2px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  transition: 'border-color 0.3s ease',
};

const addButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '1rem 1.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1rem',
  whiteSpace: 'nowrap',
};

const skillsSectionStyles = {
  marginBottom: '2rem',
};

const subtitleStyles = {
  color: '#718096',
  marginBottom: '1.5rem',
  fontSize: '1rem',
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
  maxWidth: '400px',
  margin: '0 auto',
};

const skillsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1.5rem',
};

const skillCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease',
};

const skillHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1rem',
};

const skillNameStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: 0,
};

const levelBadgeStyles = {
  color: 'white',
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '600',
};

const skillStatusStyles = {
  marginBottom: '1rem',
};

const verifiedStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#38a169',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const verifiedIconStyles = {
  fontSize: '1rem',
};

const notVerifiedStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#dd6b20',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const notVerifiedIconStyles = {
  fontSize: '1rem',
};

const actionSectionStyles = {
  display: 'flex',
  gap: '0.75rem',
  marginBottom: '0.5rem',
};

const verifyButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.85rem',
  flex: 1,
};

const viewButtonStyles = {
  backgroundColor: 'transparent',
  color: '#667eea',
  border: '1px solid #667eea',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.85rem',
  flex: 1,
};

const tipStyles = {
  textAlign: 'center',
  color: '#718096',
  fontSize: '0.8rem',
};

const progressSectionStyles = {
  padding: '1.5rem',
  backgroundColor: '#f0fff4',
  borderRadius: '8px',
  border: '1px solid #c6f6d5',
};

const progressTitleStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '1rem',
  textAlign: 'center',
};

const progressStatsStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
};

const progressStatStyles = {
  textAlign: 'center',
};

const progressNumberStyles = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#667eea',
  lineHeight: '1',
};

const progressLabelStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
  marginTop: '0.25rem',
};

export default SkillCard;
