import React from 'react';
import Card from '../Card/Card';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <Card
        title="General Inquiries"
        description="For general questions and information, please contact us at info@example.com."
      />
      <Card
        title="Customer Support"
        description="If you need assistance, our customer support team is available 24/7. Reach out at support@example.com."
      />
    </div>
  );
};

export default Contact;
