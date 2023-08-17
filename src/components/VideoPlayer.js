// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ embedUrl }) => {
  return (
    <iframe
      width="100%"
      height="480"
      src={embedUrl}
      title="YouTube Video Player"
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
