/* eslint-disable react/no-danger */
/* eslint-disable max-len */
import React from 'react';

export default function Description({ info }) {
  return (
    <div className="description-component">
      <div dangerouslySetInnerHTML={{ __html: info }} />
    </div>
  );
}
