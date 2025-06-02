import React from 'react';
import { 
  FaCode, FaMobile, FaServer, FaDatabase, 
  FaSearch, FaShieldAlt, FaTools, FaChartLine 
} from 'react-icons/fa';
import '../assets/css/style.css';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom website development using modern technologies like React, Node.js, and more. Creating responsive, user-friendly, and high-performance web applications.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Cross-browser Compatibility",
        "Performance Optimization"
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android. Building intuitive and feature-rich mobile experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Store Optimization"
      ]
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust server-side development with scalable architecture and secure APIs. Implementing efficient data processing and business logic.",
      features: [
        "API Development",
        "Server Architecture",
        "Microservices",
        "Cloud Integration"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Efficient database design and optimization for optimal performance. Implementing secure and scalable data storage solutions.",
      features: [
        "Database Architecture",
        "Query Optimization",
        "Data Security",
        "Scalability Planning"
      ]
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Improving website visibility and ranking in search engines. Implementing best practices for better online presence.",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Performance Analysis"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Solutions",
      description: "Implementing robust security measures to protect applications and data. Ensuring compliance with security standards.",
      features: [
        "Security Audits",
        "Vulnerability Testing",
        "Data Protection",
        "Security Best Practices"
      ]
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support services to ensure smooth operation of applications and systems.",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Performance Monitoring",
        "Technical Support"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Performance Optimization",
      description: "Optimizing application performance for better user experience and efficiency. Implementing best practices for speed and reliability.",
      features: [
        "Load Time Optimization",
        "Resource Management",
        "Caching Strategies",
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        {/* Hero Section */}
        <div className="services-hero">
          <div className="services-hero-content">
            <h1>My Services</h1>
            <p className="subtitle">What I can do for you</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>Key Features:</h4>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's work together to bring your ideas to life</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 