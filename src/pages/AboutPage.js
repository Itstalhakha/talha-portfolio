import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUser } from 'react-icons/fa';
import '../assets/css/style.css';

const AboutPage = () => {
  const education = [
    {
    year: "2018 - 2020",
    degree: "Secondary Education",
    institution: "Peshawar Model  School Boys 3",
    description: "Focus on Mathematics and Computer Science"
  },
    {
        year:"2021-2023",
        degree:"Higher and Secondary (11 And 12)",
        institution:"Islamia College Peshawar",
        description:"pre-enginerring"
    },
    {
        year: "2023 - 2027",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Agriculture",
        description: "Specialized in Software Engineering and Web Development"
      }
  ];

  const experience = [
    {
      year: "2023 - Present",
      position: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Developing and maintaining web applications using React, Node.js, and MongoDB"
    },
    {
      year: "2022 - 2023",
      position: "Frontend Developer Intern",
      company: "Digital Creations",
      description: "Worked on responsive web designs and implemented modern UI/UX practices"
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-hero-content">
            <h1>About Me</h1>
            <p className="subtitle">Get to know me better</p>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="about-section">
          <div className="section-header">
            <FaUser className="section-icon" />
            <h2>Personal Information</h2>
          </div>
          <div className="personal-info">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Talha Khan Gigyani</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">talhakhangigyani1@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Village GharibAbad Tehsil Shabqadar Zilla Charsadda</span>
              </div>
              <div className="info-item">
                <span className="info-label">Languages:</span>
                <span className="info-value">English,Urdu,Pashto</span>
              </div>
            </div>
            <div className="about-description">
              <p>
                I am a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions to complex problems. With several
                years of experience in the industry, I've developed a deep understanding of
                both frontend and backend development.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving,
                allowing me to build robust and user-friendly applications. I'm constantly
                learning and adapting to new technologies to stay at the forefront of
                web development.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="about-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{edu.year}</div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-section">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-content">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 