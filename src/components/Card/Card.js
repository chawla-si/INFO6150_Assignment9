import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

const CustomCard = ({ title, description }) => {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
