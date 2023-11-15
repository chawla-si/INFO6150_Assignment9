import React from 'react';
import Card from '../Card/Card.js';

const Home = () => {
  const cardsData = [
    { title: 'Home Card 1', description: 'Description 1 for Home' },
    { title: 'Home Card 2', description: 'Description 2 for Home' },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Home;
