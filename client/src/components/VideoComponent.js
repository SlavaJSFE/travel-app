/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './scss/Video.scss';

export default function VideoComponent() {
  return (
    <div className="video__wrapper">
      <ReactPlayer url="https://slavajsfe.github.io/screenshots/[v-s.mobi]Орел и решка (11-10-2015) Варшава, Польша.mp4" playing controls />
      {/* <div className="video__controller" /> */}
    </div>

  );
}

// import React from 'react';
// import { Player } from 'video-react';

// export default function VideoComponent() {
//   console.log('nastya');
//   return (
//     <Player
//       playsInline
//       src="https://youtu.be/CxwJrzEdw1U"
//     />
//   );
// }
