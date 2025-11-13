import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert since this is a demo
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={pageStyles}>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={heroTitleStyles}>Contact Us</h1>
          <p style={heroSubtitleStyles}>
            Get in touch with Team ByteForce
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={contactGridStyles}>
            {/* Contact Form */}
            <div style={formContainerStyles}>
              <h2 style={sectionTitleStyles}>Send us a Message</h2>
              <form onSubmit={handleSubmit} style={formStyles}>
                <div style={inputGroupStyles}>
                  <label style={labelStyles} htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                  <label style={labelStyles} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={textareaStyles}
                    placeholder="Tell us about your inquiry..."
                    rows="6"
                  />
                </div>

                <button type="submit" style={submitButtonStyles}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div style={infoContainerStyles}>
              <h2 style={sectionTitleStyles}>Get in Touch</h2>
              <div style={infoCardStyles}>
                <h3 style={infoTitleStyles}>Team Information</h3>
                <p style={infoTextStyles}>
                  We're Team ByteForce, passionate about building solutions that 
                  bridge the gap between education and employment.
                </p>
                
                <div style={contactMethodsStyles}>
                  <div style={contactMethodStyles}>
                    <span style={methodIconStyles}>📧</span>
                    <span style={methodTextStyles}>team@skillsetu.com</span>
                  </div>
                  
                  <div style={contactMethodStyles}>
                    <span style={methodIconStyles}>💼</span>
                    <span style={methodTextStyles}>GitHub: ByteForce</span>
                  </div>
                  
                  <div style={contactMethodStyles}>
                    <span style={methodIconStyles}>👥</span>
                    <span style={methodTextStyles}>LinkedIn: SkillSetu</span>
                  </div>
                </div>

                <div style={noteStyles}>
                  <p>
                    <strong>Note:</strong> We're currently in development phase. 
                    Your feedback and suggestions are highly valuable to us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const pageStyles = {
  minHeight: '100vh',
};

const heroStyles = {
  padding: '6rem 0 4rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  textAlign: 'center',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const heroTitleStyles = {
  fontSize: '3rem',
  fontWeight: '800',
  marginBottom: '1rem',
};

const heroSubtitleStyles = {
  fontSize: '1.4rem',
  opacity: '0.9',
  fontWeight: '300',
};

const sectionStyles = {
  padding: '5rem 0',
  backgroundColor: '#f8f9fa',
};

const contactGridStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'start',
};

const formContainerStyles = {
  backgroundColor: 'white',
  padding: '3rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const sectionTitleStyles = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '2rem',
  color: '#2d3748',
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
  fontSize: '1rem',
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
  transition: 'border-color 0.3s ease',
  fontFamily: 'inherit',
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

const infoContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const infoCardStyles = {
  backgroundColor: 'white',
  padding: '3rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const infoTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#2d3748',
};

const infoTextStyles = {
  color: '#4a5568',
  lineHeight: '1.6',
  marginBottom: '2rem',
};

const contactMethodsStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '2rem',
};

const contactMethodStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
};

const methodIconStyles = {
  fontSize: '1.5rem',
};

const methodTextStyles = {
  color: '#4a5568',
  fontWeight: '500',
};

const noteStyles = {
  padding: '1.5rem',
  backgroundColor: '#fff3cd',
  border: '1px solid #ffeaa7',
  borderRadius: '8px',
  color: '#856404',
};

export default Contact;
