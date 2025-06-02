import React from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase, FaTools, FaCloud } from 'react-icons/fa';
import '../assets/css/style.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks like React, Vue.js, and Angular."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and Python frameworks."
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using React Native and Flutter."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Designing and implementing efficient database solutions with SQL and NoSQL technologies."
    },
    {
      icon: <FaTools />,
      title: "DevOps",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure for optimal deployment."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description: "Leveraging cloud platforms like AWS, Azure, and Google Cloud for scalable solutions."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>My Services</h2>
          <p>What I can do for you</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 