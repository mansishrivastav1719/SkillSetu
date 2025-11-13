import React, { useState } from 'react';

const VerifyRequestCard = ({ requests }) => {
  const [requestList, setRequestList] = useState(requests);

  const handleApprove = (requestId) => {
    setRequestList(prev => prev.filter(req => req.id !== requestId));
    const request = requestList.find(req => req.id === requestId);
    alert(`Skill "${request.skill}" approved for ${request.learnerName}!`);
  };

  const handleReject = (requestId) => {
    setRequestList(prev => prev.filter(req => req.id !== requestId));
    const request = requestList.find(req => req.id === requestId);
    alert(`Skill "${request.skill}" rejected for ${request.learnerName}. Feedback sent.`);
  };

  const handleRequestMoreInfo = (requestId) => {
    const request = requestList.find(req => req.id === requestId);
    alert(`Requested more information from ${request.learnerName} about their ${request.skill} skill.`);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#e53e3e';
      case 'Intermediate': return '#dd6b20';
      case 'Advanced': return '#38a169';
      default: return '#718096';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div style={containerStyles}>
      {/* Header */}
      <div style={headerStyles}>
        <div>
          <h2 style={titleStyles}>Verification Requests</h2>
          <p style={subtitleStyles}>
            Review and verify learner skills based on their submitted proof
          </p>
        </div>
        <div style={statsStyles}>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>{requestList.length}</div>
            <div style={statLabelStyles}>Pending</div>
          </div>
        </div>
      </div>

      {/* Requests List */}
      {requestList.length === 0 ? (
        <div style={emptyStateStyles}>
          <div style={emptyIconStyles}>✅</div>
          <h3 style={emptyTitleStyles}>All Caught Up!</h3>
          <p style={emptyTextStyles}>
            No pending verification requests. Check back later for new submissions.
          </p>
        </div>
      ) : (
        <div style={requestsListStyles}>
          {requestList.map(request => (
            <div key={request.id} style={requestCardStyles}>
              {/* Request Header */}
              <div style={requestHeaderStyles}>
                <div style={learnerInfoStyles}>
                  <div style={avatarStyles}>👤</div>
                  <div>
                    <h4 style={learnerNameStyles}>{request.learnerName}</h4>
                    <div style={requestMetaStyles}>
                      <span style={metaItemStyles}>
                        Submitted: {formatDate(request.submittedDate)}
                      </span>
                      <span style={metaItemStyles}>•</span>
                      <span style={{
                        ...levelBadgeStyles,
                        backgroundColor: getLevelColor(request.level)
                      }}>
                        {request.level}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={skillTagStyles}>
                  {request.skill}
                </div>
              </div>

              {/* Description */}
              <div style={descriptionSectionStyles}>
                <h5 style={descriptionTitleStyles}>Description:</h5>
                <p style={descriptionTextStyles}>{request.description}</p>
              </div>

              {/* Proof Link */}
              <div style={proofSectionStyles}>
                <h5 style={proofTitleStyles}>Proof:</h5>
                <a 
                  href={request.proof} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={proofLinkStyles}
                >
                  🔗 View Proof Document
                </a>
              </div>

              {/* Verification Guidelines */}
              <div style={guidelinesStyles}>
                <h5 style={guidelinesTitleStyles}>Verification Checklist:</h5>
                <div style={checklistStyles}>
                  <label style={checklistItemStyles}>
                    <input type="checkbox" style={checkboxStyles} />
                    Proof demonstrates claimed skill level
                  </label>
                  <label style={checklistItemStyles}>
                    <input type="checkbox" style={checkboxStyles} />
                    Work appears to be original
                  </label>
                  <label style={checklistItemStyles}>
                    <input type="checkbox" style={checkboxStyles} />
                    Quality meets industry standards
                  </label>
                  <label style={checklistItemStyles}>
                    <input type="checkbox" style={checkboxStyles} />
                    Appropriate for claimed experience level
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={actionButtonsStyles}>
                <button 
                  onClick={() => handleRequestMoreInfo(request.id)}
                  style={infoButtonStyles}
                >
                  📧 Request More Info
                </button>
                <div style={decisionButtonsStyles}>
                  <button 
                    onClick={() => handleReject(request.id)}
                    style={rejectButtonStyles}
                  >
                    Reject
                  </button>
                  <button 
                    onClick={() => handleApprove(request.id)}
                    style={approveButtonStyles}
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mentor Tips */}
      <div style={tipsSectionStyles}>
        <h4 style={tipsTitleStyles}>💡 Verification Best Practices</h4>
        <div style={tipsGridStyles}>
          <div style={tipCardStyles}>
            <div style={tipIconStyles}>🔍</div>
            <h5 style={tipCardTitleStyles}>Thorough Review</h5>
            <p style={tipCardTextStyles}>
              Carefully examine all submitted proof and ensure it matches the claimed skill level.
            </p>
          </div>
          <div style={tipCardStyles}>
            <div style={tipIconStyles}>💬</div>
            <h5 style={tipCardTitleStyles}>Constructive Feedback</h5>
            <p style={tipCardTextStyles}>
              Provide specific, actionable feedback when requesting improvements or rejecting.
            </p>
          </div>
          <div style={tipCardStyles}>
            <div style={tipIconStyles}>⚖️</div>
            <h5 style={tipCardTitleStyles}>Fair Assessment</h5>
            <p style={tipCardTextStyles}>
              Maintain consistent standards while considering the learner's experience level.
            </p>
          </div>
          <div style={tipCardStyles}>
            <div style={tipIconStyles}>🚀</div>
            <h5 style={tipCardTitleStyles}>Encourage Growth</h5>
            <p style={tipCardTextStyles}>
              Recognize effort and guide learners toward areas for improvement and next steps.
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
  padding: '1rem 1.5rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const statNumberStyles = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#667eea',
  lineHeight: '1',
  marginBottom: '0.25rem',
};

const statLabelStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  fontWeight: '600',
};

const emptyStateStyles = {
  textAlign: 'center',
  padding: '4rem 2rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  marginBottom: '2rem',
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

const requestsListStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2rem',
};

const requestCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease',
};

const requestHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1.5rem',
};

const learnerInfoStyles = {
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

const learnerNameStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: '0 0 0.5rem 0',
};

const requestMetaStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexWrap: 'wrap',
};

const metaItemStyles = {
  color: '#718096',
  fontSize: '0.9rem',
};

const levelBadgeStyles = {
  color: 'white',
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '600',
};

const skillTagStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
};

const descriptionSectionStyles = {
  marginBottom: '1.5rem',
};

const descriptionTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#4a5568',
  margin: '0 0 0.5rem 0',
};

const descriptionTextStyles = {
  color: '#4a5568',
  lineHeight: '1.6',
  margin: 0,
  fontSize: '0.95rem',
};

const proofSectionStyles = {
  marginBottom: '1.5rem',
};

const proofTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#4a5568',
  margin: '0 0 0.5rem 0',
};

const proofLinkStyles = {
  color: '#667eea',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '0.95rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const guidelinesStyles = {
  marginBottom: '1.5rem',
  padding: '1.5rem',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const guidelinesTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#4a5568',
  margin: '0 0 1rem 0',
};

const checklistStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const checklistItemStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  color: '#4a5568',
  fontSize: '0.9rem',
  cursor: 'pointer',
};

const checkboxStyles = {
  width: '1rem',
  height: '1rem',
};

const actionButtonsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
};

const infoButtonStyles = {
  backgroundColor: 'transparent',
  color: '#667eea',
  border: '1px solid #667eea',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const decisionButtonsStyles = {
  display: 'flex',
  gap: '1rem',
};

const rejectButtonStyles = {
  backgroundColor: 'transparent',
  color: '#e53e3e',
  border: '1px solid #e53e3e',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const approveButtonStyles = {
  backgroundColor: '#38a169',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const tipsSectionStyles = {
  padding: '2rem',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #bae6fd',
};

const tipsTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#0369a1',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const tipsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
};

const tipCardStyles = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const tipIconStyles = {
  fontSize: '2rem',
  marginBottom: '1rem',
};

const tipCardTitleStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '0.5rem',
};

const tipCardTextStyles = {
  color: '#718096',
  fontSize: '0.9rem',
  lineHeight: '1.5',
};

export default VerifyRequestCard;
