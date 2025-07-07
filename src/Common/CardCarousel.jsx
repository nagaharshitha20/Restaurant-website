import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ImageAssets } from '../ImageAssets';

const images = [
  ImageAssets.ci1,
  ImageAssets.ci2,
  ImageAssets.ci3,
  ImageAssets.food1,
  ImageAssets.food2,
  ImageAssets.food3,
  ImageAssets.food4,
  ImageAssets.r2,
  ImageAssets.r3,
];

const visibleCount = 3;

const CardCarousel = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = images.length - visibleCount;
  const intervalRef = useRef();

  // Auto-scroll every 3 sec
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [index]);

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev < maxIndex ? prev + 1 : 0));
    }, 3000);
  };

const prevSlide = () => {
  setIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
};

const nextSlide = () => {
  setIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
};



  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', px: 2 }}>
      {/* Image Strip */}
      <Box
  sx={{
    display: 'flex',
    transition: 'all 0.5s ease-in-out',
    transform: `translateX(-${(index * 100) / visibleCount}%)`,
    width: `${(images.length * 100) / visibleCount}%`,
  }}
>
  {images.map((src, i) => (
    <Box
      key={i}
      component="img"
      src={src}
      alt={`carousel-${i}`}
      sx={{
        width: `${100 / images.length}%`,
        height: { xs: 180, sm: 220, md: 250 },
        objectFit: 'cover',
        px: 1,
        borderRadius: 2,
      }}
    />
  ))}
</Box>


      {/* Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{ position: 'absolute', top: '45%', left: 8, zIndex: 1, bgcolor: '#fff' }}
        disabled={index === 0}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{ position: 'absolute', top: '45%', right: 8, zIndex: 1, bgcolor: '#fff' }}
        disabled={index >= maxIndex}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CardCarousel;
