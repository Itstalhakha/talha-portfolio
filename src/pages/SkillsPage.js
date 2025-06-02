import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaPython, FaJava, FaPhp
} from 'react-icons/fa';
import '../assets/css/style.css';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 88 },
        { name: "React", icon: <FaReact />, level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        { name: "Python", icon: <FaPython />, level: 75 },
        { name: "Java", icon: <FaJava />, level: 70 },
        { name: "PHP", icon: <FaPhp />, level: 65 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: <FaDatabase />, level: 80 },
        { name: "MySQL", icon: <FaDatabase />, level: 75 },
        { name: "AWS", icon: <FaAws />, level: 70 },
        { name: "Docker", icon: <FaDocker />, level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Docker", icon: <FaDocker />, level: 70 },
        { name: "AWS", icon: <FaAws />, level: 75 },
        { name: "CI/CD", icon: <FaGitAlt />, level: 70 }
      ]
    }
  ];

  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Skills</h2>
          <p>What I'm good at</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 