import React from 'react';
import './CountryPhoto.scss';

export default function CountryPhoto({ image }) {
  return (
    <div className="block-photo">
      <img src={image} alt="" />
    </div>
  );
}
