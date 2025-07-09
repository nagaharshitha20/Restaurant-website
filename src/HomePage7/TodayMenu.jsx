import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ImageAssets } from '../ImageAssets'; // Make sure pizzabg, mushroombg, i1-i4, h1-h4 are imported

const items = [
  { img: ImageAssets.i1, title: 'Beef', desc: 'More than 40 different types of food.' },
  { img: ImageAssets.i2, title: 'Hamburger', desc: 'More than 40 different types of food.' },
  { img: ImageAssets.i3, title: 'Apple Pie', desc: 'A classic American dish' },
  { img: ImageAssets.i4, title: 'Buffalo Wings', desc: 'Discover our menu and order delivery' },
  { img: ImageAssets.h1, title: 'Macaroni', desc: 'A creamy, comforting dish made from cooked' },
  { img: ImageAssets.h2, title: 'Beef', desc: 'Discover our menu and order delivery' },
  { img: ImageAssets.h3, title: 'Salmon', desc: 'Get the freshest salmon and ocean trout' },
  { img: ImageAssets.h4, title: 'Chicken Kebab', desc: 'Tender chicken grilled with spices' },
];

const CardsPerPage = 7;

const TodayMenu = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (startIndex + CardsPerPage < items.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#EF1B48',
        position: 'relative',
        py: 6,
        px: { xs: 2, md: 6 },
        overflow: 'hidden',
      }}
    >
      {/* Background Images */}
{/* Background Images */}

<Box
  component="img"
  src={ImageAssets.pizzabg}
  alt="pizzabg"
  sx={{
    position: 'absolute',
    top: { xs: '-15px', md: '40px' },
    left: { xs: '-25px', md: '-30px' },
    width: { xs: '150px', md: '200px' },
    height: { xs: 'auto', md: '150px' },
    opacity: 0.9,
    zIndex: 0,
    transform: 'rotate(277.69deg)', // exact rotation from Figma
  }}
/>


<Box
  component="img"
  src={ImageAssets.mushroombg}
  alt="mushroombg"
  sx={{
    position: 'absolute',
    bottom: { xs: '-15px', md: '10px' },
    right: { xs: '5px', md: '350px' },
    width: { xs: '100px', md: '150px' },
    opacity: 0.9,
    zIndex: 0,
  }}
/>


      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          zIndex: 2,
          position: 'relative',
        }}
      >
        {/* LEFT TEXT + NAVIGATION */}
        <Box sx={{ mb: { xs: 3, md: 0 }, textAlign: { xs: 'center', md: 'left', } }}>
          <Typography
            sx={{
              color: '#fff',
              fontFamily: 'Playball',
              fontStyle: 'italic',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 400,
              mb: 0.5,
          
            }}
          >
            Today Menu
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '28px', md: '34px' },
              fontWeight: 'bold',
            }}
          >
            Our Menu
          </Typography>

          <Box sx={{ display: 'flex', mt: 2, justifyContent: { xs: 'center', md: 'start' } }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                backgroundColor: '#fff',
                mx: 0.5,
                '&:hover': { backgroundColor: '#ddd' },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                backgroundColor: '#fff',
                mx: 0.5,
                '&:hover': { backgroundColor: '#ddd' },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* RIGHT SIDE CARDS */}
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            flexShrink: 0,
            pl: { xs: 0, md: 4 },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {items.slice(startIndex, startIndex + CardsPerPage).map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '80px',
                width: 120,
                minWidth: 130,
                height: 210,
                textAlign: 'center',
                px: 1,
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mb: 1.5,
                }}
              />
              <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>{item.title}</Typography>
              <Typography sx={{ fontSize: '11px', color: '#555', mt: 0.5 }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TodayMenu;
