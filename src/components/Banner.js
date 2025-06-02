import React from 'react';
import profile from '../assets/data/profile.jpg';
import '../assets/css/style.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h1>Hi, I'm <span className="highlight">Talha Khan</span></h1>
            <h2>Full Stack Developer</h2>
            <p>Passionate about creating beautiful and functional web applications</p>
            <div className="banner-buttons">
              <a href="#contact" className="primary-btn">Contact Me</a>
              <a href="#projects" className="secondary-btn">View Projects</a>
            </div>
          </div>
          <div className="banner-image">
            <img src={profile} alt="Talha Khan" className="profile-img" />
            <div className="profile-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 