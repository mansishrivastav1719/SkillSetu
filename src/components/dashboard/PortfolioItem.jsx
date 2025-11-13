import React, { useState } from 'react';

const PortfolioItem = ({ portfolio }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [projectList, setProjectList] = useState(portfolio);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: ''
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.title.trim() && newProject.description.trim()) {
      const project = {
        id: projectList.length + 1,
        title: newProject.title.trim(),
        description: newProject.description.trim(),
        link: newProject.link.trim() || '#'
      };
      setProjectList([...projectList, project]);
      setNewProject({ title: '', description: '', link: '' });
      setShowAddForm(false);
      alert('Project added to your portfolio!');
    }
  };

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div style={headerStyles}>
        <div>
          <h2 style={titleStyles}>My Portfolio</h2>
          <p style={subtitleStyles}>
            Showcase your verified projects and achievements
          </p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          style={addButtonStyles}
        >
          + Add Project
        </button>
      </div>

      {/* Add Project Form */}
      {showAddForm && (
        <div style={formOverlayStyles}>
          <div style={formCardStyles}>
            <div style={formHeaderStyles}>
              <h3 style={formTitleStyles}>Add New Project</h3>
              <button 
                onClick={() => setShowAddForm(false)}
                style={closeButtonStyles}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleAddProject} style={formStyles}>
              <div style={inputGroupStyles}>
                <label style={labelStyles}>Project Title *</label>
                <input
                  type="text"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  required
                  style={inputStyles}
                  placeholder="E.g., E-commerce Website, Mobile App"
                />
              </div>

              <div style={inputGroupStyles}>
                <label style={labelStyles}>Description *</label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  required
                  style={textareaStyles}
                  placeholder="Describe your project, technologies used, and your role..."
                  rows="4"
                />
              </div>

              <div style={inputGroupStyles}>
                <label style={labelStyles}>Project Link (Optional)</label>
                <input
                  type="url"
                  name="link"
                  value={newProject.link}
                  onChange={handleInputChange}
                  style={inputStyles}
                  placeholder="https://github.com/yourusername/project"
                />
              </div>

              <div style={formActionsStyles}>
                <button 
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  style={cancelButtonStyles}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  style={submitButtonStyles}
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Portfolio Grid */}
      {projectList.length === 0 ? (
        <div style={emptyStateStyles}>
          <div style={emptyIconStyles}>📁</div>
          <h3 style={emptyTitleStyles}>No projects yet</h3>
          <p style={emptyTextStyles}>
            Start building your portfolio by adding your first project. 
            Showcase your work to impress mentors and recruiters.
          </p>
          <button 
            onClick={() => setShowAddForm(true)}
            style={emptyActionButtonStyles}
          >
            Add Your First Project
          </button>
        </div>
      ) : (
        <div style={portfolioGridStyles}>
          {projectList.map(project => (
            <div key={project.id} style={projectCardStyles}>
              <div style={projectHeaderStyles}>
                <h4 style={projectTitleStyles}>{project.title}</h4>
                <div style={projectActionsStyles}>
                  <button style={actionButtonStyles}>Edit</button>
                  <button style={deleteButtonStyles}>Delete</button>
                </div>
              </div>
              
              <p style={projectDescriptionStyles}>{project.description}</p>
              
              {project.link && project.link !== '#' && (
                <div style={linkSectionStyles}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyles}
                  >
                    🔗 View Project
                  </a>
                </div>
              )}

              <div style={projectFooterStyles}>
                <div style={verificationStatusStyles}>
                  <span style={statusIconStyles}>✅</span>
                  <span style={statusTextStyles}>Verified by 2 mentors</span>
                </div>
                <div style={skillsTagsStyles}>
                  <span style={skillTagStyles}>React</span>
                  <span style={skillTagStyles}>JavaScript</span>
                  <span style={skillTagStyles}>CSS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Portfolio Stats */}
      <div style={statsSectionStyles}>
        <h4 style={statsTitleStyles}>Portfolio Overview</h4>
        <div style={statsGridStyles}>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>{projectList.length}</div>
            <div style={statLabelStyles}>Total Projects</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>
              {projectList.filter(p => p.link && p.link !== '#').length}
            </div>
            <div style={statLabelStyles}>With Links</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>{projectList.length}</div>
            <div style={statLabelStyles}>Verified</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>12</div>
            <div style={statLabelStyles}>Total Views</div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div style={tipsSectionStyles}>
        <h4 style={tipsTitleStyles}>💡 Portfolio Tips</h4>
        <ul style={tipsListStyles}>
          <li style={tipItemStyles}>Add detailed descriptions of your role and contributions</li>
          <li style={tipItemStyles}>Include live demo links or GitHub repositories</li>
          <li style={tipItemStyles}>Connect projects to relevant skills for automatic verification</li>
          <li style={tipItemStyles}>Update your portfolio regularly with new projects</li>
        </ul>
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
};

const addButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1rem',
  whiteSpace: 'nowrap',
};

const formOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '2rem',
};

const formCardStyles = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '2rem',
  width: '100%',
  maxWidth: '500px',
  maxHeight: '90vh',
  overflow: 'auto',
};

const formHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.5rem',
};

const formTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: 0,
};

const closeButtonStyles = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
  color: '#718096',
  padding: 0,
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const inputGroupStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const labelStyles = {
  fontWeight: '600',
  color: '#4a5568',
  fontSize: '0.95rem',
};

const inputStyles = {
  padding: '1rem',
  border: '2px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  transition: 'border-color 0.3s ease',
};

const textareaStyles = {
  padding: '1rem',
  border: '2px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  resize: 'vertical',
  fontFamily: 'inherit',
  minHeight: '100px',
};

const formActionsStyles = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-end',
  marginTop: '1rem',
};

const cancelButtonStyles = {
  backgroundColor: 'transparent',
  color: '#718096',
  border: '1px solid #e2e8f0',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
};

const submitButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  cursor: 'pointer',
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
  margin: '0 auto 2rem',
};

const emptyActionButtonStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  border: 'none',
  padding: '1rem 2rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '1rem',
};

const portfolioGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '1.5rem',
  marginBottom: '2rem',
};

const projectCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s ease',
};

const projectHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1rem',
};

const projectTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#2d3748',
  margin: 0,
  flex: 1,
};

const projectActionsStyles = {
  display: 'flex',
  gap: '0.5rem',
};

const actionButtonStyles = {
  backgroundColor: 'transparent',
  color: '#667eea',
  border: '1px solid #667eea',
  padding: '0.25rem 0.75rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: '600',
};

const deleteButtonStyles = {
  backgroundColor: 'transparent',
  color: '#e53e3e',
  border: '1px solid #e53e3e',
  padding: '0.25rem 0.75rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: '600',
};

const projectDescriptionStyles = {
  color: '#4a5568',
  lineHeight: '1.6',
  marginBottom: '1rem',
};

const linkSectionStyles = {
  marginBottom: '1rem',
};

const linkStyles = {
  color: '#667eea',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '0.9rem',
};

const projectFooterStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '1rem',
  borderTop: '1px solid #e2e8f0',
};

const verificationStatusStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#38a169',
  fontSize: '0.85rem',
  fontWeight: '600',
};

const statusIconStyles = {
  fontSize: '1rem',
};

const statusTextStyles = {
  fontSize: '0.85rem',
};

const skillsTagsStyles = {
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
};

const skillTagStyles = {
  backgroundColor: '#667eea',
  color: 'white',
  padding: '0.25rem 0.5rem',
  borderRadius: '12px',
  fontSize: '0.7rem',
  fontWeight: '600',
};

const statsSectionStyles = {
  backgroundColor: '#f0f9ff',
  padding: '1.5rem',
  borderRadius: '8px',
  marginBottom: '2rem',
  border: '1px solid #bae6fd',
};

const statsTitleStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#0369a1',
  marginBottom: '1rem',
  textAlign: 'center',
};

const statsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1rem',
};

const statItemStyles = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const statNumberStyles = {
  fontSize: '2rem',
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

const tipsSectionStyles = {
  backgroundColor: '#fff3cd',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #ffeaa7',
};

const tipsTitleStyles = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#856404',
  marginBottom: '1rem',
};

const tipsListStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const tipItemStyles = {
  color: '#856404',
  padding: '0.5rem 0',
  fontSize: '0.95rem',
  lineHeight: '1.5',
};

export default PortfolioItem;
