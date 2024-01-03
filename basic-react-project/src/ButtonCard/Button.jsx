// Card.js
import React, { useState } from 'react';
import Paragraph from './Heading';

const Card = () => {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    setText((prevText) => 'Hello /n');
  };

  return (
    <div className="card">
      <button onClick={handleButtonClick}>Click me</button>
      <Paragraph text={text} />
    </div>
  );
};

export default Card;
