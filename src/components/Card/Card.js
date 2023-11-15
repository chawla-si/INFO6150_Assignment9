import React from 'react';

const Card = ({ detail }) => {
   return (
      <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
         <p>{detail}</p>
      </div>
   );
};

export default Card;
