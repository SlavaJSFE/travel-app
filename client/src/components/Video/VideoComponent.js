import React from 'react';
import ReactPlayer from 'react-player';

import './Video.scss';

export default function VideoComponent({ country }) {
  const url = `https://slavajsfe.github.io/screenshots/${country}.mp4`;

  return (
    <div className="video">
      <ReactPlayer
        url={url}
        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
        onContextMenu={(e) => e.preventDefault()}
        controls
      />
    </div>
  );
}
