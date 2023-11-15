import React from 'react';
import Card from '../Card/Card.js';
import './Home.css';

const Home = () => {
  const dynamicCards = [
    { title: 'Product Development', description: 'Explore our latest products and innovations.' },
    { title: 'Customer Success Stories', description: 'Discover how our products are making an impact.' },
    { title: 'Tech Talks and Webinars', description: 'Join our informative tech sessions and webinars.' },
  ];

  return (
    <div className="home">
      <h1>Welcome to Our Company</h1>
      {dynamicCards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};


export default Home;
