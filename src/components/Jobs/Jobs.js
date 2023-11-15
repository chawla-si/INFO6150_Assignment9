import React from 'react';
import Card from '../Card/Card';
import './Jobs.css';

const Jobs = () => {
  return (
    <div className="jobs">
      <h1>Jobs</h1>
      <Card
        title="Software Engineer Intern"
        description="Join our dynamic team as a software engineer and work on cutting-edge projects."
      />
      <Card
        title="Sales Associate"
        description="Need Sales associate for a client"
      />
    </div>
  );
};

export default Jobs;