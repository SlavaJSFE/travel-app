/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './scss/Video.scss';

export default function VideoComponent({country}) {
  const [control, setControl] = useState(true);

  const url = `https://slavajsfe.github.io/screenshots/${country}.mp4`;

  return (
    <ReactPlayer
      url={url}
      config={{ file: { attributes: { controlsList: 'nodownload' } } }}
      onContextMenu={(e) => e.preventDefault()}
      controls={control}
    />
  );
}
