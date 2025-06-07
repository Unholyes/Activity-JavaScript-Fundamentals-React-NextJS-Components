import React from 'react';

interface WelcomeCardProps {
  name: string;
  message?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ name, message = 'Welcome to our application!' }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      maxWidth: '400px'
    }}>
      <h2 style={{ color: '#333' }}>{message}</h2>
      <p style={{ color: '#666' }}>Hello, {name}!</p>
    </div>
  );
};

export default WelcomeCard;
