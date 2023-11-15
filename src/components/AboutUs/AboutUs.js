import React from 'react';
import Card from '../Card/Card'; // Import your Card component
import './AboutUs.css';

const AboutUs = () => {
    return (
      <div className="about-us">
        <h1>About Us</h1>
        <Card title="Our Mission" description="Empowering progress, technology aims to seamlessly intertwine innovation, interconnected future." />
        <Card title="Team Members" description="Meet our talented and dedicated team working towards success." />
      </div>
    );
  };

export default AboutUs;