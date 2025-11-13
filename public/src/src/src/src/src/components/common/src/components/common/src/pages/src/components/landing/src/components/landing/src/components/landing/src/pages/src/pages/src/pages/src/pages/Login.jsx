import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    alert('Login successful! Welcome back to SkillSetu.');
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
            <h1 style={titleStyles}>Welcome Back</h1>
            <p style={subtitleStyles}>
              Sign in to your SkillSetu account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} style={formStyles}>
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
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password Link */}
            <div style={forgotPasswordStyles}>
              <a href="#" style={forgotLinkStyles}>
                Forgot password?
              </a>
            </div>

            <button type="submit" style={submitButtonStyles}>
              Sign In
            </button>
          </form>

          {/* Demo Accounts Info */}
          <div style={demoInfoStyles}>
            <h4 style={demoTitleStyles}>Demo Accounts:</h4>
            <div style={demoAccountsStyles}>
              <div style={demoAccountStyles}>
                <strong>Learner:</strong> learner@skillsetu.com / any password
              </div>
              <div style={demoAccountStyles}>
                <strong>Mentor:</strong> mentor@skillsetu.com / any password
              </div>
              <div style={demoAccountStyles}>
                <strong>Recruiter:</strong> recruiter@skillsetu.com / any password
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={footerStyles}>
            <p style={signupTextStyles}>
              Don't have an account?{' '}
              <Link to="/signup" style={signupLinkStyles}>
                Create one here
              </Link>
            </p>
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

const forgotPasswordStyles = {
  textAlign: 'right',
  marginTop: '-0.5rem',
};

const forgotLinkStyles = {
  color: '#667eea',
  fontSize: '0.9rem',
  textDecoration: 'none',
  fontWeight: '500',
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

const demoInfoStyles = {
  marginTop: '2rem',
  padding: '1.5rem',
  backgroundColor: '#f0f9ff',
  border: '1px solid #bae6fd',
  borderRadius: '8px',
};

const demoTitleStyles = {
  fontSize: '1rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#0369a1',
};

const demoAccountsStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const demoAccountStyles = {
  fontSize: '0.85rem',
  color: '#475569',
  padding: '0.5rem',
  backgroundColor: 'white',
  borderRadius: '4px',
  border: '1px solid #e2e8f0',
};

const footerStyles = {
  textAlign: 'center',
  paddingTop: '2rem',
  borderTop: '1px solid #e2e8f0',
  marginTop: '2rem',
};

const signupTextStyles = {
  color: '#718096',
  fontSize: '0.95rem',
};

const signupLinkStyles = {
  color: '#667eea',
  fontWeight: '600',
  textDecoration: 'none',
};

export default Login;
