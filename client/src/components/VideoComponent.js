/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './scss/Video.scss';

export default function VideoComponent() {
  const [control, setControl] = useState(true);

  const handleControl = () => {
    setControl(!control);
  };

  return (
    <ReactPlayer
      url="https://slavajsfe.github.io/screenshots/germany-facts.mp4"
      config={{ file: { attributes: { controlsList: 'nodownload' } } }}
      onContextMenu={(e) => e.preventDefault()}
      controls={control}
    />
  );
}
