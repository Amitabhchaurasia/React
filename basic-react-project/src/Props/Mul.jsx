import React from 'react';
import ImgCard from './ImgCard';

function Mul({ src }) {
  return (
    <div>
      <ImgCard src={src} />
      <ImgCard src={src} />
      <ImgCard src={src} />
    </div>
  );
}

export default Mul;
