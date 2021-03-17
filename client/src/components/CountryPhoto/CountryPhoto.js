import React from 'react';

export default function CountryPhoto({ image }) {
  return (
    <div className="block-photo">
      <img src={image} alt="" />
    </div>
  );
}
