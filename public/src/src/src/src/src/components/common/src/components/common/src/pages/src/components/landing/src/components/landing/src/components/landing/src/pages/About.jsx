import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Mansi Shrivastav',
      role: 'Team Lead & Backend Developer',
      emoji: '👩‍💻'
    },
    {
      name: 'Pankaj Singh',
      role: 'Frontend Developer & Research Lead',
      emoji: '👨‍💻'
    },
    {
      name: 'Radhika Chauhan',
      role: 'Frontend Developer & UI/UX Designer',
      emoji: '👩‍🎨'
    }
  ];

  return (
    <div style={pageStyles}>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={heroTitleStyles}>About SkillSetu</h1>
          <p style={heroSubtitleStyles}>
            Building trust in skills through open verification
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={missionGridStyles}>
            <div style={missionContentStyles}>
              <h2 style={sectionTitleStyles}>Our Mission</h2>
              <p style={missionTextStyles}>
                SkillSetu was born from a simple observation: in today's competitive job market, 
                traditional certificates and resumes often fail to capture the true capabilities 
                of individuals. We're building a platform where skills speak louder than paper, 
                and verification comes from the community that knows best - peers and mentors.
              </p>
              <p style={missionTextStyles}>
                Our vision is to create a world where everyone's skills are recognized, verified, 
                and connected to the right opportunities, regardless of their background or formal education.
              </p>
            </div>
            <div style={illustrationStyles}>
              <div style={graphicStyles}>🌉</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={teamSectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>Meet Our Team</h2>
          <p style={teamSubtitleStyles}>
            Team ByteForce - Building the future of skill verification
          </p>
          
          <div style={teamGridStyles}>
            {teamMembers.map((member, index) => (
              <div key={index} style={teamCardStyles}>
                <div style={memberEmojiStyles}>{member.emoji}</div>
                <h3 style={memberNameStyles}>{member.name}</h3>
                <p style={memberRoleStyles}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Note */}
      <section style={thankYouSectionStyles}>
        <div style={containerStyles}>
          <div style={thankYouCardStyles}>
            <h2 style={thankYouTitleStyles}>Thank You!</h2>
            <p style={thankYouTextStyles}>
              We're excited to be building SkillSetu and grateful for the opportunity to work on 
              something that can make a real difference in people's careers. This is just the beginning, 
              and we can't wait to see how our platform helps bridge the gap between skills and opportunities.
            </p>
            <p style={signatureStyles}>
              - Team ByteForce
            </p>
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
  backgroundColor: 'white',
};

const missionGridStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
};

const missionContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const sectionTitleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#2d3748',
};

const missionTextStyles = {
  fontSize: '1.1rem',
  lineHeight: '1.7',
  color: '#4a5568',
};

const illustrationStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const graphicStyles = {
  fontSize: '8rem',
  opacity: '0.8',
};

const teamSectionStyles = {
  padding: '5rem 0',
  backgroundColor: '#f8f9fa',
};

const teamSubtitleStyles = {
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#718096',
  marginBottom: '3rem',
};

const teamGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

const teamCardStyles = {
  backgroundColor: 'white',
  padding: '3rem 2rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const memberEmojiStyles = {
  fontSize: '4rem',
  marginBottom: '1.5rem',
};

const memberNameStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: '#2d3748',
};

const memberRoleStyles = {
  color: '#667eea',
  fontWeight: '500',
  fontSize: '1.1rem',
};

const thankYouSectionStyles = {
  padding: '5rem 0',
  backgroundColor: 'white',
};

const thankYouCardStyles = {
  backgroundColor: '#f8f9fa',
  padding: '4rem',
  borderRadius: '16px',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
};

const thankYouTitleStyles = {
  fontSize: '2.2rem',
  fontWeight: '700',
  marginBottom: '2rem',
  color: '#2d3748',
};

const thankYouTextStyles = {
  fontSize: '1.1rem',
  lineHeight: '1.7',
  color: '#4a5568',
  marginBottom: '2rem',
};

const signatureStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#667eea',
  fontStyle: 'italic',
};

export default About;
