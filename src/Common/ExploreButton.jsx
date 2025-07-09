import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const ExploreButton = ({ name, bgcolor = '#EF1B48', width = '190px', to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        backgroundColor: bgcolor,
        color: '#fff',
        borderRadius: '35px',
        px: 1,
        py: 1,
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '14px',
      pl:4,
        width: width,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: bgcolor,
          opacity: 0.9,
        },
      }}
    >
      <span>{name}</span>
      <span
        style={{
          backgroundColor: '#fff',
          borderRadius: '50%',
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowForwardIcon fontSize="small" style={{ color: '#000' }} />
      </span>
    </Button>
  );
};

export default ExploreButton;
