import React from 'react';
import Card from '../Card/Card.js';

const Home = () => {
   const cardData = ['Card 1 Detail', 'Card 2 Detail', 'Card 3 Detail'];

   return (
      <div>
         <h1>Home Page</h1>
         {cardData.map((detail, index) => (
            <Card key={index} detail={detail} />
         ))}
      </div>
   );
};

export default Home;
