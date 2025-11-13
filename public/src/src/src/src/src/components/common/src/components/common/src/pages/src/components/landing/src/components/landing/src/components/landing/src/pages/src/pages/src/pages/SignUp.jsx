import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'learner'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, just redirect to dashboard
    alert(`Account created successfully! Welcome ${formData.fullName} as a ${formData.role}`);
    navigate('/dashboard');
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <div style={cardStyles}>
          {/* Header */}
          <div style={headerStyles}>
            <Link to="/" style={logoStyles}>
              <span style={logoIcon}>🎯</span>
              SkillSetu
            </Link>
            <h1 style={titleStyles}>Create Your Account</h1>
            <p style={subtitleStyles}>
              Join SkillSetu and start your journey to verified skills
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} style={formStyles}>
            <div style={inputGroupStyles}>
              <label style={labelStyles} htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={inputStyles}
                placeholder="Enter your full name"
              />
            </div>

            <div style={inputGroupStyles}>
              <label style={labelStyles} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyles}
                placeholder="Enter your email address"
              />
            </div>

            <div style={inputGroupStyles}>
              <label style={labelStyles} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={inputStyles}
                placeholder="Create a strong password"
                minLength="6"
              />
            </div>

            <div style={inputGroupStyles}>
              <label style={labelStyles} htmlFor="role">
                I am a
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                style={selectStyles}
              >
                <option value="learner">Learner</option>
                <option value="mentor">Mentor</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>

            <button type="submit" style={submitButtonStyles}>
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div style={footerStyles}>
            <p style={loginTextStyles}>
              Already have an account?{' '}
              <Link to="/login" style={loginLinkStyles}>
                Sign in here
              </Link>
            </p>
          </div>

          {/* Role Descriptions */}
          <div style={roleInfoStyles}>
            <h4 style={roleInfoTitleStyles}>Choose your role:</h4>
            <div style={roleGridStyles}>
              <div style={roleCardStyles}>
                <span style={roleIconStyles}>🎓</span>
                <strong>Learner:</strong> Showcase and verify your skills
              </div>
              <div style={roleCardStyles}>
                <span style={roleIconStyles}>👨‍🏫</span>
                <strong>Mentor:</strong> Help verify and guide learners
              </div>
              <div style={roleCardStyles}>
                <span style={roleIconStyles}>💼</span>
                <strong>Recruiter:</strong> Find verified talent
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const pageStyles = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
};

const containerStyles = {
  width: '100%',
  maxWidth: '500px',
  padding: '0 20px',
};

const cardStyles = {
  backgroundColor: 'white',
  padding: '3rem',
  borderRadius: '12px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
};

const headerStyles = {
  textAlign: 'center',
  marginBottom: '2.5rem',
};

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#333',
  textDecoration: 'none',
  marginBottom: '1.5rem',
};

const logoIcon = {
  fontSize: '1.8rem',
};

const titleStyles = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '0.5rem',
  color: '#2d3748',
};

const subtitleStyles = {
  color: '#718096',
  fontSize: '1rem',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2rem',
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

const selectStyles = {
  padding: '1rem',
  border: '2px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '1rem',
  backgroundColor: 'white',
  cursor: 'pointer',
};

const submitButtonStyles = {
  backgroundColor: '#667eea',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '1rem 2rem',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1.1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginTop: '1rem',
};

const footerStyles = {
  textAlign: 'center',
  paddingTop: '2rem',
  borderTop: '1px solid #e2e8f0',
};

const loginTextStyles = {
  color: '#718096',
  fontSize: '0.95rem',
};

const loginLinkStyles = {
  color: '#667eea',
  fontWeight: '600',
  textDecoration: 'none',
};

const roleInfoStyles = {
  marginTop: '2rem',
  padding: '1.5rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
};

const roleInfoTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#4a5568',
};

const roleGridStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const roleCardStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  fontSize: '0.9rem',
  color: '#4a5568',
};

const roleIconStyles = {
  fontSize: '1.2rem',
};

export default SignUp;
