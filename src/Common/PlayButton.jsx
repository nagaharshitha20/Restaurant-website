import React from 'react';

const PlayButton = ({ onClick }) => {
  return (
    <img
      src="/play-icon.png"
      alt="Play Video"
      style={{
        width: '76px',
        height: '75px',
        marginLeft:'40.91px',
        zIndex:2,
        border:'3px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

export default PlayButton;
